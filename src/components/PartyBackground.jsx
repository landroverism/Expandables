import { useEffect, useRef } from 'react';

/**
 * PartyBackground – an animated <canvas> that evokes a vibrant
 * nightclub / party atmosphere with bokeh orbs, confetti sparkles,
 * and sweeping light rays.  Designed to sit behind the hero section.
 */
export default function PartyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let W, H;

    /* ---- palette (nightclub / party colours) ---- */
    const PALETTE = [
      'rgba(200, 50, 255, ',   // electric purple
      'rgba(255, 40, 120, ',   // hot pink
      'rgba(255, 180, 40, ',   // gold
      'rgba(40, 120, 255, ',   // electric blue
      'rgba(0, 220, 180, ',    // teal
      'rgba(255, 80, 60, ',    // coral red
      'rgba(180, 60, 255, ',   // violet
      'rgba(255, 220, 80, ',   // warm yellow
    ];

    /* ---- helpers ---- */
    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    /* ========================================================
       1. BOKEH ORBS  – large, soft, slowly drifting circles
       ======================================================== */
    class Bokeh {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = rand(0, W);
        this.y = initial ? rand(0, H) : H + rand(40, 120);
        this.r = rand(40, 160);
        this.color = pick(PALETTE);
        this.alpha = rand(0.06, 0.18);
        this.vx = rand(-0.15, 0.15);
        this.vy = rand(-0.2, -0.6);
        this.pulse = rand(0, Math.PI * 2);
        this.pulseSpeed = rand(0.004, 0.012);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.y + this.r < -20) this.reset();
      }
      draw() {
        const a = this.alpha + Math.sin(this.pulse) * 0.04;
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grad.addColorStop(0, this.color + Math.min(a * 1.4, 0.35) + ')');
        grad.addColorStop(0.5, this.color + a * 0.6 + ')');
        grad.addColorStop(1, this.color + '0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ========================================================
       2. CONFETTI / SPARKLES  – tiny bright flecks drifting down
       ======================================================== */
    class Confetti {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = rand(0, W);
        this.y = initial ? rand(0, H) : rand(-40, -10);
        this.size = rand(1.5, 4);
        this.color = pick(PALETTE);
        this.alpha = rand(0.4, 0.9);
        this.vy = rand(0.3, 1.2);
        this.vx = rand(-0.4, 0.4);
        this.rotation = rand(0, Math.PI * 2);
        this.rotSpeed = rand(-0.04, 0.04);
        this.wobble = rand(0, Math.PI * 2);
        this.wobbleSpeed = rand(0.02, 0.06);
        this.wobbleAmp = rand(0.3, 1.2);
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.vx + Math.sin(this.wobble) * this.wobbleAmp;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        if (this.y > H + 20) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color + this.alpha + ')';
        // draw a small rectangle (confetti-like)
        ctx.fillRect(-this.size, -this.size * 0.4, this.size * 2, this.size * 0.8);
        ctx.restore();
      }
    }

    /* ========================================================
       3. LIGHT RAYS  – sweeping beams from bottom or sides
       ======================================================== */
    class LightRay {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.originX = rand(W * 0.1, W * 0.9);
        this.originY = H + 20;
        this.angle = rand(-Math.PI * 0.75, -Math.PI * 0.25); // upward
        this.length = rand(H * 0.5, H * 1.2);
        this.width = rand(40, 120);
        this.color = pick(PALETTE);
        this.alpha = 0;
        this.targetAlpha = rand(0.03, 0.08);
        this.fadeIn = true;
        this.sweepSpeed = rand(-0.001, 0.001);
        this.life = 0;
        this.maxLife = rand(300, 600);
      }
      update() {
        this.angle += this.sweepSpeed;
        this.life++;
        if (this.life < 60) {
          this.alpha = (this.life / 60) * this.targetAlpha;
        } else if (this.life > this.maxLife - 60) {
          this.alpha = ((this.maxLife - this.life) / 60) * this.targetAlpha;
        }
        if (this.life > this.maxLife) this.reset();
      }
      draw() {
        if (this.alpha < 0.005) return;
        const endX = this.originX + Math.cos(this.angle) * this.length;
        const endY = this.originY + Math.sin(this.angle) * this.length;

        const grad = ctx.createLinearGradient(this.originX, this.originY, endX, endY);
        grad.addColorStop(0, this.color + this.alpha * 1.5 + ')');
        grad.addColorStop(0.5, this.color + this.alpha * 0.8 + ')');
        grad.addColorStop(1, this.color + '0)');

        ctx.save();
        ctx.translate(this.originX, this.originY);
        ctx.rotate(this.angle);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -this.width * 0.5);
        ctx.lineTo(this.length, -this.width * 0.15);
        ctx.lineTo(this.length, this.width * 0.15);
        ctx.lineTo(0, this.width * 0.5);
        ctx.closePath();
        // reset transform for fill (gradient is in world space)
        ctx.restore();

        // Redraw with simpler approach
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color + '1)';
        ctx.filter = `blur(${Math.round(this.width * 0.3)}px)`;
        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(endX - this.width * 0.3, endY);
        ctx.lineTo(endX + this.width * 0.3, endY);
        ctx.closePath();
        ctx.fill();
        ctx.filter = 'none';
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    /* ========================================================
       4. GLITTER  – tiny twinkling dots
       ======================================================== */
    class Glitter {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = rand(0, W);
        this.y = rand(0, H);
        this.size = rand(0.5, 2.5);
        this.color = pick(PALETTE);
        this.phase = rand(0, Math.PI * 2);
        this.speed = rand(0.03, 0.08);
        this.maxAlpha = rand(0.3, 0.9);
        this.life = 0;
        this.maxLife = rand(120, 400);
      }
      update() {
        this.phase += this.speed;
        this.life++;
        if (this.life > this.maxLife) this.reset();
      }
      draw() {
        const twinkle = Math.max(0, Math.sin(this.phase));
        const lifeAlpha = this.life < 30
          ? this.life / 30
          : this.life > this.maxLife - 30
            ? (this.maxLife - this.life) / 30
            : 1;
        const a = twinkle * this.maxAlpha * lifeAlpha;
        if (a < 0.01) return;
        ctx.fillStyle = this.color + a + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ---- collections ---- */
    let bokehs = [];
    let confettis = [];
    let rays = [];
    let glitters = [];

    function init() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;

      const bokehCount = Math.max(8, Math.round(W * H / 80000));
      const confettiCount = Math.max(30, Math.round(W * H / 15000));
      const rayCount = Math.max(3, Math.round(W / 300));
      const glitterCount = Math.max(40, Math.round(W * H / 10000));

      bokehs = Array.from({ length: bokehCount }, () => new Bokeh());
      confettis = Array.from({ length: confettiCount }, () => new Confetti());
      rays = Array.from({ length: rayCount }, () => new LightRay());
      glitters = Array.from({ length: glitterCount }, () => new Glitter());
    }

    function animate() {
      /* dark overlay – slight purple/blue tint base */
      ctx.fillStyle = 'rgba(8, 4, 20, 0.25)';
      ctx.fillRect(0, 0, W, H);

      /* draw in order: rays → bokehs → confetti → glitter */
      for (const r of rays)      { r.update(); r.draw(); }
      for (const b of bokehs)    { b.update(); b.draw(); }
      for (const c of confettis) { c.update(); c.draw(); }
      for (const g of glitters)  { g.update(); g.draw(); }

      animId = requestAnimationFrame(animate);
    }

    init();
    /* fill first frame solid so there's no flash */
    ctx.fillStyle = '#080414';
    ctx.fillRect(0, 0, W, H);
    animId = requestAnimationFrame(animate);

    const onResize = () => {
      cancelAnimationFrame(animId);
      init();
      ctx.fillStyle = '#080414';
      ctx.fillRect(0, 0, W, H);
      animId = requestAnimationFrame(animate);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="party-bg-canvas"
      aria-hidden="true"
    />
  );
}
