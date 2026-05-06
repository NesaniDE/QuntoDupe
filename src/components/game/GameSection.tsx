"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  Diamond,
  Pause,
  Play,
  RotateCcw,
  Target,
} from "lucide-react";

type GameStatus = "idle" | "running" | "paused" | "gameover";

type SpikeObstacle = {
  type: "spike";
  x: number;
  size: number;
};

type BlockObstacle = {
  type: "block";
  x: number;
  y: number;
  w: number;
  h: number;
};

type CrateObstacle = {
  type: "crate";
  x: number;
  y: number;
  w: number;
  h: number;
};

type PendulumObstacle = {
  type: "pendulum";
  x: number;
  topY: number;
  length: number;
  size: number;
  phase: number;
};

type Obstacle = SpikeObstacle | BlockObstacle | CrateObstacle | PendulumObstacle;

type Pickup = {
  x: number;
  y: number;
  collected: boolean;
};

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

type FloatingText = {
  x: number;
  y: number;
  text: string;
  life: number;
  maxLife: number;
};

type Building = {
  x: number;
  w: number;
  h: number;
};

type Player = {
  x: number;
  y: number;
  vy: number;
  rot: number;
  rotSpeed: number;
  onGround: boolean;
};

type GameState = {
  player: Player;
  scroll: number;
  speed: number;
  obstacles: Obstacle[];
  pickups: Pickup[];
  stars: Star[];
  particles: Particle[];
  floatingTexts: FloatingText[];
  buildings: Building[];
  scoreFloat: number;
  jumpHeld: boolean;
  nextSpawnX: number;
  rngSeed: number;
};

const CANVAS_W = 1200;
const CANVAS_H = 540;
const GROUND_Y = CANVAS_H - 80;
const PLAYER_SIZE = 46;
const PLAYER_X = 220;
const BASE_SPEED = 5.4;
const MAX_SPEED = 12.4;
const SPEED_RAMP_DISTANCE = 9000;
const GRAVITY = 0.78;
const JUMP_VELOCITY = -14.5;

function padScore(n: number): string {
  return String(Math.max(0, Math.floor(n))).padStart(6, "0");
}

const PICKUP_SCORE = 50;

function createInitialState(): GameState {
  return {
    player: {
      x: PLAYER_X,
      y: GROUND_Y - PLAYER_SIZE,
      vy: 0,
      rot: 0,
      rotSpeed: 0,
      onGround: true,
    },
    scroll: 0,
    speed: BASE_SPEED,
    obstacles: [],
    pickups: [],
    stars: [],
    particles: [],
    floatingTexts: [],
    buildings: [],
    scoreFloat: 0,
    jumpHeld: false,
    nextSpawnX: CANVAS_W + 280,
    rngSeed: 1,
  };
}

function nextRand(state: GameState): number {
  state.rngSeed = (state.rngSeed * 9301 + 49297) % 233280;
  return state.rngSeed / 233280;
}

function obstacleX(o: Obstacle): number {
  return o.x;
}

function spawnElement(state: GameState): void {
  const x = state.nextSpawnX;
  const r = nextRand(state);
  // Slow eased difficulty ramp — 0..1 over ~9000 px, gentle start
  const rampRaw = Math.min(1, state.scroll / 9000);
  const diff = rampRaw * rampRaw;
  const gapBase = 290 - diff * 70;

  // Warmup phase: only easy single obstacles + free diamonds
  if (state.scroll < 1400) {
    if (r < 0.4) {
      state.obstacles.push({ type: "spike", x, size: 32 });
      state.nextSpawnX = x + gapBase + 60 + nextRand(state) * 90;
    } else if (r < 0.78) {
      const size = 38;
      state.obstacles.push({
        type: "crate",
        x,
        y: GROUND_Y - size,
        w: size,
        h: size,
      });
      state.nextSpawnX = x + gapBase + 50 + nextRand(state) * 90;
    } else {
      // Free pickup at jump height — invites the first jump
      state.pickups.push({
        x,
        y: GROUND_Y - 90 - nextRand(state) * 50,
        collected: false,
      });
      state.nextSpawnX = x + 230 + nextRand(state) * 60;
    }
    return;
  }

  if (r < 0.2) {
    state.obstacles.push({ type: "spike", x, size: 32 });
    state.nextSpawnX = x + gapBase + nextRand(state) * 80;
  } else if (r < 0.32 && diff > 0.2) {
    // Double spike
    state.obstacles.push({ type: "spike", x, size: 32 });
    state.obstacles.push({ type: "spike", x: x + 32, size: 32 });
    state.nextSpawnX = x + gapBase + 60 + nextRand(state) * 80;
  } else if (r < 0.4 && diff > 0.55) {
    // Triple spike — late game
    state.obstacles.push({ type: "spike", x, size: 32 });
    state.obstacles.push({ type: "spike", x: x + 32, size: 32 });
    state.obstacles.push({ type: "spike", x: x + 64, size: 32 });
    state.nextSpawnX = x + gapBase + 110;
  } else if (r < 0.55) {
    // Single crate
    const size = 38;
    state.obstacles.push({
      type: "crate",
      x,
      y: GROUND_Y - size,
      w: size,
      h: size,
    });
    state.nextSpawnX = x + gapBase + nextRand(state) * 70;
  } else if (r < 0.66 && diff > 0.3) {
    // Two crates side by side
    const size = 38;
    state.obstacles.push({
      type: "crate",
      x,
      y: GROUND_Y - size,
      w: size,
      h: size,
    });
    state.obstacles.push({
      type: "crate",
      x: x + size,
      y: GROUND_Y - size,
      w: size,
      h: size,
    });
    state.nextSpawnX = x + gapBase + size + 30;
  } else if (r < 0.74 && diff > 0.55) {
    // Stacked crates — needs precise timing, late game
    const size = 38;
    state.obstacles.push({
      type: "crate",
      x,
      y: GROUND_Y - size,
      w: size,
      h: size,
    });
    state.obstacles.push({
      type: "crate",
      x,
      y: GROUND_Y - size * 2,
      w: size,
      h: size,
    });
    state.nextSpawnX = x + gapBase + 30;
  } else if (r < 0.83 && diff > 0.4) {
    // Spike + crate combo
    const size = 38;
    state.obstacles.push({ type: "spike", x, size: 32 });
    state.obstacles.push({
      type: "crate",
      x: x + 70,
      y: GROUND_Y - size,
      w: size,
      h: size,
    });
    state.nextSpawnX = x + gapBase + 80;
  } else if (r < 0.93) {
    // Floating platform with diamond
    const w = 160 + nextRand(state) * 110;
    const h = 16;
    const y = GROUND_Y - 110 - nextRand(state) * 50;
    state.obstacles.push({ type: "block", x, y, w, h });
    state.pickups.push({ x: x + w / 2 - 14, y: y - 50, collected: false });
    state.nextSpawnX = x + w + 180;
  } else if (r < 0.98 && diff > 0.6) {
    // Pendulum hazard
    state.obstacles.push({
      type: "pendulum",
      x,
      topY: 0,
      length: 140 + nextRand(state) * 60,
      size: 34,
      phase: nextRand(state) * Math.PI * 2,
    });
    state.nextSpawnX = x + 320 + nextRand(state) * 100;
  } else {
    // Standalone diamond at jump height
    state.pickups.push({
      x,
      y: GROUND_Y - 90 - nextRand(state) * 80,
      collected: false,
    });
    state.nextSpawnX = x + 230;
  }
}

function ensureWorldAhead(state: GameState): void {
  const horizon = state.scroll + CANVAS_W * 2.2;
  while (state.nextSpawnX < horizon) {
    spawnElement(state);
  }
  // Cleanup off-screen obstacles/pickups behind the player
  const cutoff = state.scroll - 240;
  state.obstacles = state.obstacles.filter((o) => obstacleX(o) > cutoff);
  state.pickups = state.pickups.filter((p) => p.x > cutoff);
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * CANVAS_W,
    y: Math.random() * (GROUND_Y - 40),
    size: Math.random() < 0.75 ? 1 : 2,
    speed: 0.15 + Math.random() * 0.4,
  }));
}

function generateBuildings(): Building[] {
  const buildings: Building[] = [];
  let x = 0;
  while (x < CANVAS_W * 3) {
    const w = 50 + Math.random() * 90;
    const h = 50 + Math.random() * 160;
    buildings.push({ x, w, h });
    x += w + 4;
  }
  return buildings;
}

export function GameSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(createInitialState());
  const statusRef = useRef<GameStatus>("idle");
  const bestRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const logoRef = useRef<HTMLImageElement | null>(null);

  const [status, setStatus] = useState<GameStatus>("idle");
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [best, setBest] = useState(0);

  const setStatusBoth = useCallback((s: GameStatus) => {
    statusRef.current = s;
    setStatus(s);
  }, []);

  const persistBest = useCallback((value: number) => {
    try {
      localStorage.setItem("nesani-game-best", String(Math.floor(value)));
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const commitBest = useCallback(
    (value: number) => {
      const floored = Math.max(0, Math.floor(value));
      if (floored <= bestRef.current) return;
      bestRef.current = floored;
      setBest(floored);
      persistBest(floored);
    },
    [persistBest],
  );

  const resetWorld = useCallback(() => {
    const fresh = createInitialState();
    fresh.stars = generateStars(110);
    fresh.buildings = generateBuildings();
    fresh.rngSeed = Math.floor(Math.random() * 100000) + 1;
    ensureWorldAhead(fresh);
    stateRef.current = fresh;
    setScore(0);
    setProgress(0);
  }, []);

  const startGame = useCallback(() => {
    if (statusRef.current === "running") return;
    if (statusRef.current === "gameover" || statusRef.current === "idle") {
      resetWorld();
    }
    setStatusBoth("running");
  }, [resetWorld, setStatusBoth]);

  const pauseGame = useCallback(() => {
    if (statusRef.current === "running") setStatusBoth("paused");
    else if (statusRef.current === "paused") setStatusBoth("running");
  }, [setStatusBoth]);

  const resetBest = useCallback(() => {
    bestRef.current = 0;
    setBest(0);
    persistBest(0);
  }, [persistBest]);

  const triggerJump = useCallback(() => {
    const st = stateRef.current;
    if (statusRef.current !== "running") return;
    if (st.player.onGround) {
      st.player.vy = JUMP_VELOCITY;
      st.player.onGround = false;
      st.player.rotSpeed = 0.18;
    }
  }, []);

  // Initial mount: load best, generate world, load logo
  useEffect(() => {
    let value = 0;
    try {
      const stored = localStorage.getItem("nesani-game-best");
      value = stored ? parseInt(stored, 10) || 0 : 0;
    } catch {
      // ignore
    }
    bestRef.current = value;
    if (value > 0) {
      // Loading persisted value from localStorage on mount is a one-shot
      // sync from an external source — this is the canonical use case for
      // setState in an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBest(value);
    }
    resetWorld();

    const img = new window.Image();
    img.src = "/icon-512.png";
    img.onload = () => {
      logoRef.current = img;
    };
  }, [resetWorld]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const update = (dt: number) => {
      if (statusRef.current !== "running") return;
      const st = stateRef.current;
      const p = st.player;

      // Smooth ease-out speed ramp from BASE_SPEED to MAX_SPEED
      const ramp = Math.min(1, st.scroll / SPEED_RAMP_DISTANCE);
      const eased = 1 - (1 - ramp) * (1 - ramp);
      st.speed = BASE_SPEED + (MAX_SPEED - BASE_SPEED) * eased;
      st.scroll += st.speed * dt;
      st.scoreFloat += dt * 0.6 * (0.7 + eased * 0.6);

      ensureWorldAhead(st);

      // Variable jump: hold space → keep jumping when on ground
      if (st.jumpHeld && p.onGround) {
        p.vy = JUMP_VELOCITY;
        p.onGround = false;
        p.rotSpeed = 0.18;
      }

      // Physics
      if (!p.onGround) {
        p.vy += GRAVITY * dt;
        p.y += p.vy * dt;
        p.rot += p.rotSpeed * dt;
      }

      // Determine ground level (default = floor; blocks/crates can override)
      let ground = GROUND_Y - PLAYER_SIZE;
      let landedOnSolid = false;
      for (const o of st.obstacles) {
        if (o.type !== "block" && o.type !== "crate") continue;
        const ox = o.x - st.scroll;
        const left = ox;
        const right = ox + o.w;
        const top = o.y;
        const bottom = o.y + o.h;

        const playerBottom = p.y + PLAYER_SIZE;
        const playerLeft = p.x;
        const playerRight = p.x + PLAYER_SIZE;

        const overlapping =
          playerRight > left + 2 &&
          playerLeft < right - 2 &&
          playerBottom > top &&
          p.y < bottom;

        if (!overlapping) continue;

        const prevBottom = playerBottom - p.vy * dt;
        if (p.vy >= 0 && prevBottom <= top + 4) {
          // Landing on top — safe
          if (top - PLAYER_SIZE < ground) {
            ground = top - PLAYER_SIZE;
            landedOnSolid = true;
          }
        } else {
          // Side / under impact — death
          handleDeath();
          return;
        }
      }

      if (p.y >= ground) {
        p.y = ground;
        p.vy = 0;
        if (!p.onGround) {
          p.rot = 0;
          p.rotSpeed = 0;
        }
        p.onGround = true;
      } else {
        p.onGround = false;
      }

      void landedOnSolid;

      // Obstacle collisions
      const px = p.x + 6;
      const py = p.y + 6;
      const pw = PLAYER_SIZE - 12;
      const ph = PLAYER_SIZE - 12;

      for (const o of st.obstacles) {
        if (o.type === "spike") {
          const ox = o.x - st.scroll;
          const sx = ox + 6;
          const sy = GROUND_Y - o.size + 8;
          const sw = o.size - 12;
          const sh = o.size - 10;
          if (px < sx + sw && px + pw > sx && py < sy + sh && py + ph > sy) {
            handleDeath();
            return;
          }
        } else if (o.type === "pendulum") {
          const ox = o.x - st.scroll;
          const angle = Math.sin(st.scroll * 0.004 + o.phase) * 0.5;
          const tipX = ox + Math.sin(angle) * o.length;
          const tipY = o.length * Math.cos(angle);
          const wx = tipX - o.size / 2;
          const wy = tipY - o.size / 2;
          if (
            px < wx + o.size - 4 &&
            px + pw > wx + 4 &&
            py < wy + o.size - 4 &&
            py + ph > wy + 4
          ) {
            handleDeath();
            return;
          }
        }
      }

      // Pickups
      for (const pk of st.pickups) {
        if (pk.collected) continue;
        const x = pk.x - st.scroll;
        if (x < -50 || x > CANVAS_W + 50) continue;
        if (px < x + 26 && px + pw > x + 4 && py < pk.y + 26 && py + ph > pk.y + 4) {
          pk.collected = true;
          st.scoreFloat += PICKUP_SCORE;
          spawnParticles(x + 14, pk.y + 14);
          st.floatingTexts.push({
            x: x + 14,
            y: pk.y + 6,
            text: `+${PICKUP_SCORE}`,
            life: 60,
            maxLife: 60,
          });
        }
      }

      // Stars parallax
      for (const s of st.stars) {
        s.x -= s.speed * dt;
        if (s.x < 0) {
          s.x = CANVAS_W + Math.random() * 40;
          s.y = Math.random() * (GROUND_Y - 40);
        }
      }

      // Particles
      for (const part of st.particles) {
        part.x += part.vx * dt;
        part.y += part.vy * dt;
        part.vy += 0.2 * dt;
        part.life -= dt;
      }
      st.particles = st.particles.filter((p) => p.life > 0);

      // Floating texts
      for (const ft of st.floatingTexts) {
        ft.y -= 1.4 * dt;
        ft.x -= st.speed * dt;
        ft.life -= dt;
      }
      st.floatingTexts = st.floatingTexts.filter((ft) => ft.life > 0);
    };

    const handleDeath = () => {
      const st = stateRef.current;
      for (let i = 0; i < 18; i++) {
        st.particles.push({
          x: st.player.x + PLAYER_SIZE / 2,
          y: st.player.y + PLAYER_SIZE / 2,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8 - 2,
          life: 30 + Math.random() * 20,
          maxLife: 50,
        });
      }
      const final = Math.floor(st.scoreFloat);
      setScore(final);
      commitBest(final);
      setStatusBoth("gameover");
    };

    const spawnParticles = (x: number, y: number) => {
      const st = stateRef.current;
      for (let i = 0; i < 10; i++) {
        st.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5 - 1,
          life: 22 + Math.random() * 14,
          maxLife: 36,
        });
      }
    };

    const drawSpike = (x: number, size: number) => {
      const baseY = GROUND_Y;
      ctx.beginPath();
      ctx.moveTo(x, baseY);
      ctx.lineTo(x + size / 2, baseY - size);
      ctx.lineTo(x + size, baseY);
      ctx.closePath();
      ctx.stroke();
    };

    const drawBlock = (x: number, y: number, w: number, h: number) => {
      ctx.strokeRect(x, y, w, h);
      ctx.beginPath();
      ctx.moveTo(x + 12, y + h / 2);
      ctx.lineTo(x + w - 12, y + h / 2);
      ctx.stroke();
    };

    const drawCrate = (x: number, y: number, w: number, h: number) => {
      ctx.strokeRect(x, y, w, h);
      // Inner cross detailing
      ctx.beginPath();
      ctx.moveTo(x + 4, y + 4);
      ctx.lineTo(x + w - 4, y + h - 4);
      ctx.moveTo(x + w - 4, y + 4);
      ctx.lineTo(x + 4, y + h - 4);
      ctx.stroke();
    };

    const drawPendulum = (
      x: number,
      length: number,
      size: number,
      phase: number,
      scroll: number,
    ) => {
      const angle = Math.sin(scroll * 0.004 + phase) * 0.5;
      const tipX = x + Math.sin(angle) * length;
      const tipY = length * Math.cos(angle);

      ctx.save();
      ctx.setLineDash([4, 4]);
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(tipX - size / 2, tipY - size / 2);
      ctx.lineTo(tipX + size / 2, tipY - size / 2);
      ctx.lineTo(tipX, tipY + size / 2);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(tipX, tipY - size / 2, 3, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawDiamond = (x: number, y: number, t: number) => {
      ctx.save();
      ctx.translate(x + 14, y + 14);
      ctx.rotate(t * 0.04);
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(11, 0);
      ctx.lineTo(0, 14);
      ctx.lineTo(-11, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(0, 14);
      ctx.moveTo(-11, 0);
      ctx.lineTo(11, 0);
      ctx.stroke();
      ctx.restore();
    };

    const drawPlayerLogo = (x: number, y: number, size: number, rot: number) => {
      const cx = x + size / 2;
      const cy = y + size / 2;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      const img = logoRef.current;
      if (img && img.complete && img.naturalWidth > 0) {
        // Crop the inner cube area (skip the surrounding black circle).
        // The logo PNG is 512x512 with the cube occupying roughly the
        // center 65 % — cropping that region gives us a cleaner Geometry-
        // Dash-style square sprite.
        const srcW = img.naturalWidth;
        const srcH = img.naturalHeight;
        const inset = 0.18;
        const sx = srcW * inset;
        const sy = srcH * inset;
        const sw = srcW * (1 - inset * 2);
        const sh = srcH * (1 - inset * 2);

        ctx.shadowColor = "rgba(255,255,255,0.55)";
        ctx.shadowBlur = 14;
        ctx.drawImage(img, sx, sy, sw, sh, -size / 2, -size / 2, size, size);
        ctx.shadowBlur = 0;
      } else {
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = "#fff";
        ctx.strokeRect(-size / 2, -size / 2, size, size);
      }

      ctx.restore();
    };

    const drawCity = (scroll: number) => {
      const st = stateRef.current;
      const offset = (scroll * 0.18) % CANVAS_W;
      ctx.save();
      ctx.fillStyle = "#0a0a0d";
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1;
      for (const b of st.buildings) {
        const bx = b.x - offset;
        const screenX = ((bx % (CANVAS_W * 2)) + CANVAS_W * 2) % (CANVAS_W * 2);
        const drawX = screenX - CANVAS_W / 2;
        if (drawX < -100 || drawX > CANVAS_W + 100) continue;
        ctx.fillRect(drawX, GROUND_Y - b.h, b.w, b.h);
        // window dots
        for (let r = 0; r < Math.floor(b.h / 14); r++) {
          for (let c = 0; c < Math.floor(b.w / 12); c++) {
            if ((r + c + b.x) % 5 === 0) {
              ctx.fillStyle = "rgba(255,255,255,0.06)";
              ctx.fillRect(drawX + 4 + c * 12, GROUND_Y - b.h + 8 + r * 14, 3, 3);
              ctx.fillStyle = "#0a0a0d";
            }
          }
        }
      }
      ctx.restore();
    };

    const render = () => {
      const st = stateRef.current;

      // Background
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Subtle vertical gradient (vignette via fill)
      const grad = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
      grad.addColorStop(0, "rgba(255,255,255,0.02)");
      grad.addColorStop(1, "rgba(0,0,0,0.4)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Stars
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      for (const s of st.stars) {
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // City silhouette
      drawCity(st.scroll);

      // Glow defaults for foreground
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(255,255,255,0.55)";
      ctx.shadowBlur = 10;

      // Ground line
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_W, GROUND_Y);
      ctx.stroke();

      // Obstacles
      for (const o of st.obstacles) {
        if (o.type === "spike") {
          const ox = o.x - st.scroll;
          if (ox < -50 || ox > CANVAS_W + 50) continue;
          drawSpike(ox, o.size);
        } else if (o.type === "block") {
          const ox = o.x - st.scroll;
          if (ox < -200 || ox > CANVAS_W + 50) continue;
          drawBlock(ox, o.y, o.w, o.h);
        } else if (o.type === "crate") {
          const ox = o.x - st.scroll;
          if (ox < -100 || ox > CANVAS_W + 50) continue;
          drawCrate(ox, o.y, o.w, o.h);
        } else {
          const ox = o.x - st.scroll;
          if (ox < -200 || ox > CANVAS_W + 200) continue;
          drawPendulum(ox, o.length, o.size, o.phase, st.scroll);
        }
      }

      // Pickups
      for (const pk of st.pickups) {
        if (pk.collected) continue;
        const x = pk.x - st.scroll;
        if (x < -50 || x > CANVAS_W + 50) continue;
        drawDiamond(x, pk.y, st.scroll);
      }

      // Player
      drawPlayerLogo(st.player.x, st.player.y, PLAYER_SIZE, st.player.rot);

      // Particles
      ctx.shadowBlur = 6;
      for (const part of st.particles) {
        const a = Math.max(0, part.life / part.maxLife);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(part.x - 1, part.y - 1, 2, 2);
      }

      // Floating texts
      ctx.shadowBlur = 8;
      ctx.font = "600 16px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const ft of st.floatingTexts) {
        const a = Math.max(0, ft.life / ft.maxLife);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillText(ft.text, ft.x, ft.y);
      }
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";

      ctx.shadowBlur = 0;
    };

    const tick = (now: number) => {
      const last = lastTimeRef.current || now;
      const rawDt = (now - last) / 16.6667;
      const dt = Math.min(2.4, rawDt || 1);
      lastTimeRef.current = now;
      update(dt);
      render();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [commitBest, setStatusBoth]);

  // Sync HUD numbers from refs at modest rate
  useEffect(() => {
    const id = window.setInterval(() => {
      const st = stateRef.current;
      setScore(Math.floor(st.scoreFloat));
      const ramp = Math.min(1, st.scroll / SPEED_RAMP_DISTANCE);
      const eased = 1 - (1 - ramp) * (1 - ramp);
      setProgress(Math.round(eased * 100));
    }, 90);
    return () => window.clearInterval(id);
  }, []);

  // Keyboard input
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
        e.preventDefault();
        if (statusRef.current === "idle" || statusRef.current === "gameover") {
          startGame();
        } else {
          stateRef.current.jumpHeld = true;
          triggerJump();
        }
      } else if (e.code === "KeyP" || e.code === "Escape") {
        e.preventDefault();
        pauseGame();
      }
    };
    const onUp = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
        stateRef.current.jumpHeld = false;
      }
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [pauseGame, startGame, triggerJump]);

  // Pointer/touch input
  const handlePointerDown = useCallback(() => {
    if (statusRef.current === "idle" || statusRef.current === "gameover") {
      startGame();
      return;
    }
    stateRef.current.jumpHeld = true;
    triggerJump();
  }, [startGame, triggerJump]);

  const handlePointerUp = useCallback(() => {
    stateRef.current.jumpHeld = false;
  }, []);

  const showOverlay =
    status === "idle" || status === "paused" || status === "gameover";

  const tempoMultiplier = 1 + (progress / 100) * 1.3;

  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="text-[13px] tracking-[0.04em] text-white/55">
          <Link href="/" className="hover:text-white transition-colors">
            NESANI
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white">Game</span>
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <div className="text-[12px] uppercase tracking-[0.32em] text-white/55 font-semibold">
            Mini Game
          </div>
          <h1 className="mt-4 font-sans font-semibold text-[40px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-[-0.02em]">
            Reflexe. Fokus. Fortschritt.
          </h1>
          <p className="mt-4 text-[15px] md:text-[17px] text-white/65">
            Ein kurzer Run. Nur du und das Timing.
          </p>
        </div>

        <div className="mt-10 md:mt-14 rounded-2xl border border-white/12 bg-[#08080b] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-3 md:gap-6 px-4 md:px-7 py-4 border-b border-white/10">
            <div className="min-w-[68px]">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Punkte
              </div>
              <div className="font-mono text-[20px] md:text-[22px] tabular-nums text-white">
                {padScore(score)}
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-2 md:px-4">
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                Tempo
              </div>
              <div className="relative flex-1 h-[6px] rounded-full bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full transition-[width] duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="font-mono text-[13px] tabular-nums text-white/85 w-[42px] text-right">
                ×{tempoMultiplier.toFixed(1)}
              </div>
            </div>

            <div className="min-w-[68px] text-right">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Beste
              </div>
              <div className="font-mono text-[20px] md:text-[22px] tabular-nums text-white">
                {padScore(best)}
              </div>
            </div>

            <button
              type="button"
              onClick={pauseGame}
              aria-label={status === "paused" ? "Fortsetzen" : "Pause"}
              className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-white/15"
              disabled={status === "idle" || status === "gameover"}
            >
              {status === "paused" ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>

          <div
            className="relative w-full aspect-[12/5.4] bg-black select-none touch-none"
            onMouseDown={handlePointerDown}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchEnd={handlePointerUp}
          >
            <canvas
              ref={canvasRef}
              width={CANVAS_W}
              height={CANVAS_H}
              className="block w-full h-full"
            />

            {showOverlay && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[2px]">
                <div className="text-center max-w-md px-6">
                  {status === "idle" && (
                    <>
                      <div className="text-[11px] uppercase tracking-[0.32em] text-white/55">
                        Bereit
                      </div>
                      <div className="mt-3 text-[28px] md:text-[34px] font-semibold tracking-[-0.01em]">
                        Starte deinen Lauf.
                      </div>
                      <p className="mt-3 text-[14px] text-white/70">
                        Leertaste, Klick oder Tap zum Springen. Halte gedrückt für Sprung-Ketten. Es wird mit der Zeit immer schneller.
                      </p>
                    </>
                  )}
                  {status === "paused" && (
                    <>
                      <div className="text-[11px] uppercase tracking-[0.32em] text-white/55">
                        Pause
                      </div>
                      <div className="mt-3 text-[28px] md:text-[34px] font-semibold tracking-[-0.01em]">
                        Kurz durchatmen.
                      </div>
                      <p className="mt-3 text-[14px] text-white/70">
                        Drücke <kbd className="px-1.5 py-0.5 rounded border border-white/20 text-[12px]">P</kbd> oder den Button zum Fortsetzen.
                      </p>
                    </>
                  )}
                  {status === "gameover" && (
                    <>
                      <div className="text-[11px] uppercase tracking-[0.32em] text-white/55">
                        Game Over
                      </div>
                      <div className="mt-3 text-[28px] md:text-[34px] font-semibold tracking-[-0.01em]">
                        Wieder rein.
                      </div>
                      <p className="mt-3 text-[14px] text-white/70">
                        Punkte: <span className="font-mono">{padScore(score)}</span> · Beste: <span className="font-mono">{padScore(best)}</span>
                      </p>
                      <p className="mt-2 text-[12px] text-white/45">
                        Leertaste oder Klick für einen neuen Versuch.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={startGame}
            className="inline-flex items-center gap-2.5 bg-white text-[#050505] px-7 md:px-9 py-3 md:py-3.5 rounded-full text-[15px] font-semibold hover:bg-white/90 transition-colors shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]"
          >
            <Play size={16} className="fill-current" />
            {status === "idle" ? "Spiel starten" : status === "running" ? "Läuft …" : "Neu starten"}
          </button>
          <button
            type="button"
            onClick={resetBest}
            className="inline-flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors"
          >
            <RotateCcw size={13} />
            Bestenlauf zurücksetzen
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <InfoCard icon={<Target size={18} />} title="Ziel" desc="So weit wie möglich" />
          <InfoCard
            icon={<Activity size={18} />}
            title="Tempo"
            desc="Wird stetig schneller"
          />
          <InfoCard icon={<Diamond size={18} />} title="Tipp" desc="Bleib im Flow." />
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function InfoCard({ icon, title, desc }: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/85">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold">
          {title}
        </div>
        <div className="text-[14px] text-white/85 truncate">{desc}</div>
      </div>
    </div>
  );
}
