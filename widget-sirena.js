(function () {
    function isValidBRPhone(nums) {
        function setErr(msg) {
            var el = document.getElementById('q-phone-error');
            if (el) el.textContent = msg;
        }
        if (nums.length < 10) { setErr('N\u00famero incompleto — informe DDD + n\u00famero'); return false; }
        if (nums.length > 11) { setErr('N\u00famero longo demais'); return false; }
        if (!/^[1-9][1-9]/.test(nums)) { setErr('DDD inv\u00e1lido'); return false; }
        if (nums.length === 11 && nums[2] !== '9') { setErr('Celular deve come\u00e7ar com 9 ap\u00f3s o DDD'); return false; }
        var local = nums.length === 11 ? nums.slice(3) : nums.slice(2);
        if (/^(\d)\1+$/.test(local)) { setErr('N\u00famero n\u00e3o parece real — confira'); return false; }
        if (/(\d)\1{5,}/.test(local)) { setErr('N\u00famero n\u00e3o parece real — confira'); return false; }
        // so 1-2 digitos distintos = fake (99996666, 54545454, 56565656)
        if (new Set(local).size <= 2) { setErr('N\u00famero n\u00e3o parece real — confira'); return false; }
        if (/^(?:01234567|12345678|23456789|34567890|98765432|87654321|76543210|0123456789|1234567890)/.test(local)) { setErr('N\u00famero n\u00e3o parece real — confira'); return false; }
        return true;
    }


    // ─── SEO BACKLINK BADGE (mini logo discreto pro crawler do Google) ───
    (function() {
        function injectPLBadge() {
            try {
                if (document.querySelector('.pl-seo-badge')) return;
                var path = window.location.pathname;
                var isProduct = document.querySelector('meta[property="og:type"][content="product"]') || /\/(produtos?|products|p)\/[^\/?#]+/.test(path);
                if (!isProduct) return;
                var b = document.createElement('div');
                b.className = 'pl-seo-badge';
                b.style.cssText = 'text-align:center;padding:4px 0;margin:0;opacity:0.5;line-height:1;';
                var a = document.createElement('a');
                a.href = 'https://provoulevou.com.br?utm_source=widget&utm_medium=lojista&utm_campaign=sirena';
                a.target = '_blank';
                a.rel = 'noopener';
                a.title = 'Provador Virtual de Óculos por Provou Levou';
                a.style.cssText = 'display:inline-block;text-decoration:none;border:0;outline:0;';
                var img = document.createElement('img');
                img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAoCAMAAAA2Yc1OAAAAYFBMVEUAAAB2Muz18f18DvaRWfFsZ/wAAP8AAAAAAAAAAAB8Oe17Ou3/AP+pVP+0jvTJr/dVVaqHO/t/AH+AO/R/P7+AO/SAO/QAAAB7Oe0AAACDPfp9O/V7Oe17OOwAAAB7OezQS/HyAAAAIHRSTlNg6f8E/gMBry/Sr08BA//+AyMCawTFlQD8+/4Kki6QcnVUoNsAAAaeSURBVHja3ZoJc9sqEIBFEKADOc7RhyyE9P//ZXeX21frmcZvEqbjRIBcPu29SmPSEPZoqiGsMD9jNAlJwoe2gochLKfpn0QpgcZ9DGwuBhtWZwzXTz6RlF9FCWIbf83LspSUcLn8Gn+EOBuvlnyoCTPpwM3xmQeyML6EkhvLrjISJ3NPlKY1+7Ksxv57Sq7vQALmbCX//pTCDHcgUZr2KL875QRfXGMx+ldg7rDpe1NKac9k176+vBzqKWv0/0Ap0BN5nwDxO59AQ1CnmDPZz8laHmfzFi5qG2usGWtRti84Xs+EaZ9OGV2evOX70rz4owiac6tkry8tm+GjskxDz6aBYUy39X2vms4UU41S6K27TdFaXgmjgwu8oaF7ty5NlhsqSkxT9nXdITE5Gu3cmzUyZA32zTkJs3xch2H9wNQF1uxb2sKdc6K2yzOFZS8vDAV6YJcqu51OPX74QSdUaaqhi7x2wpU4cKUzTR/XFSHTpB/4FSWlCGnKMrPRfGoI5yxYzQRiWQZw+yNbaMwrN9yaNSqBJCRneEnpzs0SpMhaFGgxHKUGcBSVIE+nzR9fNQGsP5VrW8GAyMo0xToulZRNTYkukVIx/FyNRAfpz00MyyiBal58pMOQzv9EeSWMgG3WwWQkL+sJ+6YDDc3iQ7heqa6Pa0G04TlEho4gFW6gx3FPlgL9/jKMzo1gT+1OZN45WIl+xIYN1rqdYp19mBJMszLLmnLLBz8FJe2j/qlyTfmDJ71OWu6/SN2h5KBg8IPGSmIklX03ProjTt4AAPjro5QoSXaLMtlaQ4dWaeqUofxak6i6eBllS8p9hxKPPJjJCixxGUCQAPHgOiAAOzsKqzX38f5BWTIfSWqzLCiz3yR5qDjVVGt9EJ7KRleItngMN7wP/JfujWO8tHxHMXLmVRYVdmHCshTeNCdDfYSSUUrQHiBglpwFpan8Zj57eeSwM23vETcrdHhE221KlFyOoXMQFcYzUtidXKYL6XXQ4QcoD16MHpbdp4wkfXnM0t10QbzduTMK4LcpUQf3NOjMxAWn8MzwGFiMjlaSfv8tJSlrm34/QExh55T9LUp1SellGKPEI5RriCEhIOKZJUMZWogpQGTGHD+NNQ9Qevllt8MO2Tz/gvKKLONcj3zdo5RzHa8N4VnUzpEuWMS4pOS3KNl8bovA/BqnrmpsH+wyU9Z22QVV7fzKI3aJRmjLIaJvtVjvci/LUA5OZ3apS1lyO8lM2QbBtW2KJq9RvLd9bJ8pr/hYnxlFcd/3sercLtlFbo5uR4akwWcGAVOQw11zmu8Spa9dAmUqtlpvmGih5HyCqd6Kl1umNJdrwSJ7j189BhXjZZMfWUFJxxSThjFN7r919zkP6CV0NRwGFAw1nKpe8e5CBF1WTdmRTvkgiPVjhKdBlG1W1gNCJci5pZmbuU9XUG55rTtFKeFclOEpi87nSV1WYnW6iJcrtoglF2Zt28F8SlJWB9mcfAdxMUTGkgsKM8wQuDdOaCRPFh8FUYJUF9R9jZTgZ1LUQJ+D4bJloWfAGHKXeSzWE10EzpRkp4rKsPwwwh35uWDR1akA3FeJbZn7eGnQ8FnP0XwSjU8GPnEWvRBleJTjFrfsS9BYzpEX0mCsSSBvhajhR8h9WhYnUJnxHhE1NpcVylSUXVlyqHKuyF7L2qwsUs5yH+q3jVZzt3qxkrktvgh8RzXFqngHBbUjZevCV5Ahv/eUPqTg7VBfstAeCD0C5m0zT+FVUV+qsvCqfEqnqqIsCbhKb/3ou3qiqSsvbhzDwooxLKwGTt01LXBuoOft+45xAyKhZs9Ui4GTGpagsQPMtSN2RLC2ObzCOOCIGfvBixd/xK8O7r5R6EE3L6Bm24ooSEuwlkMKrjflBirTmuoG3N/574my5NQHT0WyjN0SrCwn/zYgbVgGi80CoddwvXsfxelZgCg1byZSfJZGSgqKGbCAz8vI/yUvSWJjAxykWwfGBmx4yLgGnY7YTUwb6GWOX3cfK3RIQKVhX8wJ3ixlBVywu+1YVPvwSujrKfPQvHobd2+Dfvc/j+dtL0N2JpBSXO0WXKm7nkOZG45HK+T7ZItETQpRNq1wgzwWb12hVIPOpcZOZdpHTc0GM6T1fm99jU3nZ8ryX79BkJO89woBXFzUme9MCRoubksTIKU2P4DSaG32+cb7y93ktwdVI/n7vXGHZNCuRd2a6teVUogf89cTE+ZKO3Tk81j38c087W3Xc/5GRF9932P5T4A0vwEkzAGPQIFmHAAAAABJRU5ErkJggg==';
                img.alt = 'Provador Virtual de Óculos por Provou Levou';
                img.style.cssText = 'height:12px;width:auto;border:0;display:block;';
                a.appendChild(img);
                b.appendChild(a);
                document.body.appendChild(b);
            } catch(e) {}
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectPLBadge);
        else injectPLBadge();
        setTimeout(injectPLBadge, 2500);
    })();


    // ===============================================
    // 0. CHUMBAR A API KEY AQUI DIRETO NO CÓDIGO
    // ===============================================
    const apiKey = "pl_live_a280325db3edc0959f82978eac375b95ba00f0b2bfa169987c0dee9fcf462f42";
    window.PROVOU_LEVOU_API_KEY = apiKey;

    const WEBHOOK_PROVA = 'https://n8n.segredosdodrop.com/webhook/gerador-oculos';
    const WEBHOOK_PIX = 'https://n8n.segredosdodrop.com/webhook/sirena-pix';
    const WEBHOOK_PIX_STATUS = 'https://n8n.segredosdodrop.com/webhook/sirena-pix-status';
    const WEBHOOK_CHECK_LIMIT = 'https://n8n.segredosdodrop.com/webhook/sirena-check-limit';
    const SIZES_TOP = ['XXP', 'XP', 'P', 'M', 'G', 'XG', 'XXG', '3XG', '4XG', '5XG'];
    const SIZES_BOTTOM = ['36/XXP', '38/XP', '40/P', '42/M', '44/G', '46/XG', '48/XXG', '50/3XG', '52/4XG', '54/5XG'];
    const SIZES_BOTTOM_SW = ['XXP', 'XP', 'P', 'M', 'G', 'XG', 'XXG', '3XG', '4XG', '5XG'];


    const GRADE = {
        regular: [49, 51, 54, 57, 61, 62, 64, 66, 70, 73],
        oversized: [58, 60, 62, 64, 66, 70, 73, 76, 79, 83],
        oversizedSS: [58, 61, 63, 67, 70, 74, 78, 82, 87, 92],
        hoodie: [50, 53, 55, 58, 62, 65, 69, 74, 79, 83],
        boxyHoodie: [61, 77, 78, 79, 80, 81, 82, 83, 84, 85],
        puffer: [53, 56, 59, 61, 70, 74, 78, 82, 86, 90],
        vest: [52, 55, 57, 59, 63, 66, 70, 72, 76, 82],
        boxyHenley: [54, 56, 58, 64, 66, 68, 70, 76, 78, 84],
        bottomTailoring: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
        bottomSweat: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
        underwear: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
        quadrilTailoring: [48, 50, 52, 56, 58, 60, 62, 64, 66, 68],
        quadrilSweat: [48, 50, 52, 54, 56, 58, 60, 62, 64, 66],
        quadrilUnderwear: [50, 52, 54, 56, 58, 60, 62, 64, 66, 68],
    };


    function detectProduct(name) {
        const n = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (/tailoring/.test(n) || /\d\/\d\s*short/.test(n) || /\b(1\/5|2\/5|3\/5|4\/5)\b/.test(n)) return { category: 'bottom', fit: 'tailoring' };
        if (/underwear|cueca/.test(n)) return { category: 'bottom', fit: 'underwear' };
        if (/sweatpant|sweatshort|sweat pant|sweat short|calca|bermuda/.test(n)) return { category: 'bottom', fit: 'sweat' };
        if (/henley/.test(n)) return { category: 'top', fit: 'boxyHenley' };
        if (/boxy.*(hoodie|crewneck|crew)/.test(n) || /(hoodie|crewneck|crew).*boxy/.test(n)) return { category: 'top', fit: 'boxyHoodie' };
        if (/puffer|jacket/.test(n)) return { category: 'top', fit: 'puffer' };
        if (/vest/.test(n)) return { category: 'top', fit: 'vest' };
        if (/(hoodie|hoodie zip|half zip|crewneck|crew neck)/.test(n) && !/oversized|boxy|short sleeve/.test(n)) return { category: 'top', fit: 'hoodie' };
        if (/oversized.*(hoodie|crewneck|crew|short sleeve)/.test(n) || /short sleeve.*(hoodie|crewneck)/.test(n)) return { category: 'top', fit: 'oversizedSS' };
        if (/oversized|boxy tee|2\/4/.test(n)) return { category: 'top', fit: 'oversized' };
        return { category: 'top', fit: 'regular' };
    }


    function estimarTorax(altura, peso) {
        if (altura < 3) altura *= 100;
        let circ = 0.65 * peso + 56;
        const imc = peso / Math.pow(altura / 100, 2);
        if (imc > 30) circ += 4; else if (imc > 25) circ += 2;
        return circ;
    }


    function findClosest(arr, val) {
        let idx = 0, minDiff = Infinity;
        arr.forEach((v, i) => { const d = Math.abs(v - val); if (d < minDiff) { minDiff = d; idx = i; } });
        return idx;
    }


    let recommendedSize = 'M';
    let currentProduct = { category: 'top', fit: 'regular' };

    function calculateFinalSize() {
        // Feature desativada: não faz mais cálculos de tamanho
        return;
    }


    // ─── LOCK / UNLOCK SCROLL DA PÁGINA ──────────────────────────────────────────


    let scrollY = 0;


    function lockBodyScroll() {
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflowY = 'scroll';
    }


    function unlockBodyScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
    }


    // ─── ESTILOS ──────────────────────────────────────────────────────────────────


    const styles = `
/* PL: borda arredondada do modal */@media(min-width:768px){.q-card-ia,.q-card,#q-card-ia,#q-card,.q-modal-card{border-radius:16px !important;overflow:hidden;}}

        /* ── Fontes ── */

        :root {
            --c-bg: #ffffff;
            --c-surface: #faf5fa;
            --c-ink: #7d4a7d;
            --c-muted: #999;
            --c-line: #e8e8e8;
            --c-accent: #7d4a7d;
            --c-brand: #7d4a7d;
            --c-danger: #cc3333;
            --font-display: inherit;
            --font-body: inherit;
        }

        /* ── Trigger (selo sobre foto) ── */
        @keyframes q-shake { 0%,50%,100%{transform:rotate(0deg)} 10%,30%{transform:rotate(-10deg)} 20%,40%{transform:rotate(10deg)} }
        .q-btn-trigger-ia {
            position: absolute; top: 58px; right: 14px; z-index: 100;
            background: none; border: none; padding: 0; cursor: pointer;
            width: 70px; height: 70px;
            display: flex; align-items: center; justify-content: center;
            filter: drop-shadow(0 3px 10px rgba(0,0,0,0.22));
            animation: q-shake 3s infinite;
            transition: filter 0.2s;
        }
        .q-btn-trigger-ia:hover { filter: drop-shadow(0 6px 18px rgba(0,0,0,0.32)); }
        .q-btn-trigger-ia img { width: 100%; height: 100%; object-fit: contain; }
        @media (min-width: 768px) { .q-btn-trigger-ia { width: 70px; height: 70px; } }

        /* ── Inline button ── */
        .q-btn-inline-provador {
            display: flex; align-items: center; justify-content: center; gap: 7px;
            width: 100%; height: 41px; padding: 0 16px;
            background: #fff; color: var(--c-ink);
            border: 1.5px solid var(--c-ink); border-radius: 4px;
            font-family: 'Poppins', var(--font-body), sans-serif; font-size: 14px; font-weight: 400; letter-spacing: normal; text-transform: uppercase;
            cursor: pointer; transition: background 0.25s, color 0.25s;
            margin-top: 10px; box-sizing: border-box;
        }
        .q-btn-inline-provador:hover { background: var(--c-ink); color: #fff; }
        .q-btn-inline-provador svg { width: 14px; height: 14px; flex-shrink: 0; }

        /* ── Modal overlay ── */
        @keyframes q-modal-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        #q-modal-ia {
            display: none; position: fixed; inset: 0; z-index: 999999;
            background: rgba(255,253,246,0.96);
            font-family: var(--font-body);
            overflow-y: auto; box-sizing: border-box;
        }
        #q-modal-ia * { box-sizing: border-box; }

        /* ── Card ── */
        .q-card-ia {
            width: 100%; min-height: 100vh;
            background: var(--c-bg); color: var(--c-ink);
            display: flex; flex-direction: column; position: relative;
            animation: q-modal-in 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        @media (min-width: 768px) {
            #q-modal-ia { display: none; align-items: center; justify-content: center; }
            .q-card-ia {
                width: 440px; max-width: 92vw; min-height: auto;
                max-height: 96vh; border: none;
                box-shadow: 0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06);
                overflow: hidden;
            }
        }

        /* ── Close ── */
        .q-close-ia {
            position: absolute; top: 18px; right: 18px;
            background: none; border: none;
            font-size: 20px; font-weight: 300; color: var(--c-muted);
            cursor: pointer; z-index: 10; line-height: 1; padding: 4px 6px;
            transition: color 0.2s;
        }
        .q-close-ia:hover { color: var(--c-ink); }

        /* ── Content scroll ── */
        .q-content-scroll {
            flex: 1; padding: 0; overflow-y: auto;
            text-align: left; display: flex; flex-direction: column;
        }
        .q-content-scroll::-webkit-scrollbar { width: 3px; }
        .q-content-scroll::-webkit-scrollbar-thumb { background: var(--c-line); }

        @media (max-width: 767px) {
            #q-modal-ia { display:none; overflow-y:auto; align-items:flex-start; justify-content:center; }
            #q-modal-ia[style*="flex"] { display:flex !important; }
            .q-card-ia { width:100%; border:none; margin:0; min-height:100svh; }
            .q-content-scroll { flex: 1; }
        }

        /* ── Header strip ── */
        #q-header-provador {
            padding: 28px 28px 0;
            display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 10px;
            border-bottom: 1px solid var(--c-line);
            padding-bottom: 22px; margin-bottom: 0;
        }
        #q-header-provador h1 {
            margin: 0;
            font-family: var(--font-display);
            font-size: 22px; letter-spacing: 4px;
            color: var(--c-ink); text-transform: uppercase;
            font-weight: 400; line-height: 1;
        }

        /* ── Main step ── */
        #q-step-photo {
            display: flex; flex-direction: column; padding: 28px 28px 32px;
            gap: 0; align-items: stretch;
        }

        /* ── Labels & inputs ── */
        .q-field-label {
            display: block; font-size: 10px; font-weight: 600;
            letter-spacing: 2px; text-transform: uppercase;
            color: var(--c-muted); margin-bottom: 8px;
        }
        .q-phone-wrap { margin-bottom: 28px; }
        .q-input {
            display: block; width: 100%; height: 52px;
            padding: 0 16px; margin: 0;
            background: var(--c-surface); border: 1.5px solid transparent;
            border: 1.5px solid var(--c-line); border-radius: 14px;
            font-size: 16px; font-family: var(--font-body); font-weight: 400;
            color: var(--c-ink); outline: none;
            -webkit-appearance: none; appearance: none; transition: border-color 0.2s;
        }
        .q-input:focus { border-color: var(--c-ink); background: #fff; }
        .q-input::placeholder { color: #bbb; }

        .q-provas-msg:empty { display: none; }
        .q-provas-msg {
            font-size: 13px; margin-top: 10px; letter-spacing: 0.3px;
            color: var(--c-ink); font-weight: 500;
            background: var(--c-surface);
            border: 1px solid var(--c-line);
            border-radius: 6px;
            padding: 10px 14px;
            text-align: center;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .q-provas-msg.is-warn {
            color: var(--c-danger);
            background: rgba(204,51,51,0.08);
            border-color: rgba(204,51,51,0.3);
            font-weight: 600;
        }

        .q-status-msg {
            display: none; font-size: 11px; color: var(--c-danger);
            font-weight: 500; margin-top: 6px; letter-spacing: 0.3px;
        }

        /* ── Section label ── */
        .q-section-label {
            font-family: var(--font-display);
            font-size: 16px; letter-spacing: 3px; text-transform: uppercase;
            color: var(--c-ink); margin: 0 0 14px; font-weight: 400;
            text-align: center;
        }

        /* ── Tip ── */
        .q-tip-box {
            display: flex; align-items: center; gap: 9px;
            background: var(--c-surface);
            padding: 11px 14px; margin-bottom: 20px;
            font-size: 11.5px; color: var(--c-muted); line-height: 1.45;
            border-radius: 6px;
        }
        .q-tip-box i { color: var(--c-ink); font-size: 15px; flex-shrink: 0; }
        /* ── Required field marker + shake feedback ── */
        .q-required-mark { color: var(--c-danger); font-weight: 700; margin-left: 4px; }
        @keyframes q-shake-x {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
            20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
        .q-shake { animation: q-shake-x 0.5s cubic-bezier(.36,.07,.19,.97); }
        .q-input.is-error {
            border-color: var(--c-danger) !important;
            background: rgba(204,51,51,0.06) !important;
            box-shadow: 0 0 0 3px rgba(204,51,51,0.15);
        }
        .q-face-frame.is-error {
            outline: 3px solid var(--c-danger);
            outline-offset: 2px;
            background: rgba(204,51,51,0.06);
        }
        .q-validation-hint {
            display: none;
            background: var(--c-danger);
            color: #fff;
            font-size: 13px; font-weight: 600;
            letter-spacing: 0.3px;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 12px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(204,51,51,0.25);
            animation: q-pop-in 0.25s ease;
        }
        .q-validation-hint.is-visible { display: block; }
        @keyframes q-pop-in {
            0% { opacity: 0; transform: translateY(-6px); }
            100% { opacity: 1; transform: translateY(0); }
        }


        /* ── Face frame ── */
        @keyframes q-frame-pulse { 0%,100%{opacity:0.3} 50%{opacity:0.7} }
        .q-face-frame {
            position: relative; width: 200px; height: 260px;
            margin: 0 auto 24px; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            overflow: hidden; background: var(--c-surface);
            border-radius: 4px;
            transition: transform 0.2s;
        }
        .q-face-frame:hover { transform: scale(1.015); }
        .q-face-frame img { width: 100%; height: 100%; object-fit: cover; display: none; }
        .q-face-placeholder { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .q-face-placeholder i { font-size: 72px; color: #d0d0d0; }
        /* Corner marks — clean editorial style */
        .q-face-corner {
            position: absolute; width: 20px; height: 20px;
            border-color: var(--c-brand); border-style: solid;
            transition: border-color 0.2s;
        }
        .q-face-corner-tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
        .q-face-corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .q-face-corner-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
        .q-face-corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        /* ── Upload buttons ── */
        .q-upload-btns {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 8px; width: 100%; margin-bottom: 24px;
        }
        .q-upload-btn {
            display: flex; align-items: center; justify-content: center; gap: 7px;
            padding: 12px 8px;
            border: 1.5px solid var(--c-line);
            background: transparent; color: var(--c-ink);
            font-family: var(--font-body); font-size: 12px; font-weight: 500;
            cursor: pointer; transition: border-color 0.2s, background 0.2s; border-radius: 14px;
        }
        .q-upload-btn:hover { border-color: var(--c-ink); background: var(--c-surface); }
        .q-upload-btn i { font-size: 16px; }

        /* ── Terms ── */
        .q-terms-row {
            display: flex; align-items: flex-start; gap: 10px;
            font-size: 11.5px; color: var(--c-muted); cursor: pointer;
            line-height: 1.5; margin-bottom: 20px;
            justify-content: center; text-align: center;
        }
        .q-terms-row input { margin-top: 3px; cursor: pointer; accent-color: var(--c-ink); flex-shrink: 0; }
        .q-terms-row a { color: var(--c-ink); text-decoration: underline; text-underline-offset: 2px; }

        /* ── CTA buttons ── */
        .q-btn-black {
            width: 100%; height: 52px;
            background: var(--c-brand); color: #fff;
            border: none; border-radius: 14px;
            font-family: var(--font-display); font-size: 14px;
            letter-spacing: 3px; text-transform: uppercase;
            cursor: pointer; transition: opacity 0.2s; box-sizing: border-box;
        }
        .q-btn-black:hover:not(:disabled) { opacity: 0.82; }
        .q-btn-black:disabled { background: #ccc; cursor: not-allowed; }
        .q-btn-outline {
            width: 100%; height: 52px;
            background: transparent; color: var(--c-ink);
            border: 1.5px solid var(--c-line); border-radius: 14px;
            font-family: var(--font-display); font-size: 14px;
            letter-spacing: 3px; text-transform: uppercase;
            cursor: pointer; transition: border-color 0.2s, background 0.2s; box-sizing: border-box;
        }
        .q-btn-outline:hover { border-color: var(--c-ink); background: var(--c-surface); }

        /* ── PIX screen ── */
        #q-step-pix {
            display: none; text-align: center;
            padding: 36px 28px; flex-direction: column; gap: 16px; align-items: center;
        }
        #q-step-pix h2 {
            font-family: var(--font-display); font-size: 19px;
            letter-spacing: 3px; text-transform: uppercase; margin: 0; font-weight: 400;
        }
        .q-pix-subtitle { font-size: 13px; color: var(--c-muted); margin: 0; line-height: 1.6; }
        .q-pix-qr { width: 180px; height: 180px; border: 1px solid var(--c-line); padding: 6px; margin: 0 auto; }
        .q-pix-qr img { width: 100%; height: 100%; }
        .q-pix-copiacola { display: flex; gap: 8px; width: 100%; max-width: 320px; margin: 0 auto; }
        .q-pix-copiacola input {
            flex: 1; height: 40px; padding: 0 12px; border: 1px solid var(--c-line);
            background: var(--c-surface); font-size: 11px; font-family: var(--font-body);
            outline: none; min-width: 0;
        }
        .q-pix-copiacola button {
            height: 40px; padding: 0 14px; background: var(--c-ink); color: #fff;
            border: none; font-size: 10px; font-weight: 600; letter-spacing: 1px;
            text-transform: uppercase; cursor: pointer;
        }
        .q-pix-status { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--c-muted); }
        @keyframes q-pix-pulse { 0%,100%{opacity:.4} 50%{opacity:1} }
        .q-pix-waiting { animation: q-pix-pulse 1.5s infinite ease-in-out; color: #d97706; }
        .q-pix-approved { color: #16a34a; }
        .q-pix-cancel { font-size: 11px; color: var(--c-muted); text-decoration: underline; cursor: pointer; margin-top: 4px; }

        /* ── Loading ── */
        @keyframes q-slide { from{transform:translateX(-100%)} to{transform:translateX(100%)} }
        @keyframes q-alt-show { 0%,5%{opacity:0;transform:translateY(6px)} 15%,45%{opacity:1;transform:translateY(0)} 55%,100%{opacity:0;transform:translateY(-6px)} }
        @keyframes q-alt-hide { 0%,55%{opacity:0;transform:translateY(6px)} 65%,95%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(-6px)} }
        #q-loading-box {
            display: none; padding: 28px;
            text-align: center; flex: 1; flex-direction: column;
            align-items: center; justify-content: center; min-height: 60vh;
        }
        .q-loading-texts {
            position: relative; height: 36px; width: 100%;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 24px;
        }
        .q-loading-t1, .q-loading-t2 {
            position: absolute; width: 100%;
            display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .q-loading-t1 {
            font-family: var(--font-display); font-size: 15px; letter-spacing: 4px;
            text-transform: uppercase; color: var(--c-ink);
            animation: q-alt-show 3.6s ease-in-out infinite;
        }
        .q-loading-t2 {
            animation: q-alt-hide 3.6s ease-in-out infinite;
            text-decoration: none; opacity: 0;
        }
        .q-loading-t2 span {
            font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
            color: var(--c-muted); font-family: var(--font-body);
        }
        .q-loading-t2 img { height: 16px; width: auto; opacity: 0.7; }
        .q-loading-bar { height: 1px; background: var(--c-line); width: 100%; position: relative; overflow: hidden; }
        .q-loading-bar > div {
            position: absolute; top: 0; left: 0; height: 100%; width: 35%;
            background: var(--c-ink); animation: q-slide 1.4s infinite linear;
        }

        /* ── Result ── */
        #q-step-result { display: none; flex-direction: column; gap: 0; align-items: stretch; }

        .q-res-title {
            display: block;
            font-family: var(--font-display); font-size: 15px;
            letter-spacing: 3px; text-transform: uppercase;
            color: var(--c-ink); padding: 20px 28px 16px; margin: 0;
            border-bottom: 1px solid var(--c-line);
            text-align: center;
        }
        .q-res-subtitle, .q-res-note { display: none; }

        #q-result-img-col {
            width: 100%; max-height: 56vh; background: var(--c-surface);
            overflow: hidden; display: flex; align-items: center; justify-content: center;
        }
        #q-result-img-col img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }

        #q-result-actions-col {
            display: flex; flex-direction: column; gap: 8px;
            padding: 20px 28px 26px;
        }
        .q-res-mobile-only { margin: 0; }

        /* CTA de compra na tela de resultado */
        .q-result-prodinfo { text-align: left; margin-bottom: 6px; }
        .q-result-prodname {
            font-family: var(--font-body); font-size: 20px; font-weight: 700;
            color: var(--c-ink); line-height: 1.25; margin-bottom: 6px;
        }
        .q-result-prodprice {
            font-family: var(--font-display); font-size: 28px; letter-spacing: .5px; font-weight: 700;
            color: var(--c-ink); line-height: 1;
        }
        .q-result-installment {
            font-family: var(--font-body); font-size: 12px; color: var(--c-muted);
            margin-top: 4px; letter-spacing: .2px;
        }
        .q-scarcity {
            margin-top: 12px; font-family: var(--font-body); font-size: 13px; font-weight: 700;
            color: var(--c-danger); letter-spacing: 1.5px; text-transform: uppercase;
            display: flex; align-items: center; justify-content: flex-start; gap: 6px;
        }
        .q-scarcity i { font-size: 15px; }
        /* Selos de segurança */
        .q-seals {
            display: flex; justify-content: flex-start; gap: 30px;
            margin: 8px 0; padding: 12px 0;
            border-top: 1px solid var(--c-line); border-bottom: 1px solid var(--c-line);
        }
        .q-seal { display: flex; align-items: center; gap: 9px; }
        .q-seal > i { font-size: 24px; color: var(--c-ink); flex-shrink: 0; }
        .q-seal span {
            font-family: var(--font-body); font-size: 12px; font-weight: 700;
            text-transform: uppercase; letter-spacing: .6px; line-height: 1.25;
            color: var(--c-ink); text-align: left;
        }
        .q-fakebuy {
            position: fixed; left: 18px; bottom: 18px; z-index: 2147483000;
            background: var(--c-bg, #fff); color: var(--c-ink); border: 1px solid var(--c-line); border-radius: 10px;
            box-shadow: 0 8px 28px -6px rgba(0,0,0,.28); padding: 11px 14px;
            display: flex; align-items: center; gap: 10px; max-width: 290px;
            font-family: var(--font-body); opacity: 0; transform: translateY(14px);
            pointer-events: none; transition: opacity .35s ease, transform .35s ease;
        }
        .q-fakebuy.show { opacity: 1; transform: translateY(0); }
        .q-fakebuy > i { font-size: 22px; color: var(--c-ink); flex-shrink: 0; }
        .q-fakebuy strong { font-size: 12.5px; font-weight: 700; }
        .q-fakebuy > div { display: flex; flex-direction: column; line-height: 1.35; }
        .q-fakebuy span { font-size: 10.5px; color: var(--c-muted); }
        @media (max-width:560px){ .q-fakebuy{ left:12px; right:12px; bottom:12px; max-width:none; } }
        .q-btn-buy-now {
            background: var(--c-ink); color: #fff; border: 1px solid var(--c-ink);
            width: 100%; padding: 17px 18px; font-family: var(--font-body);
            font-weight: 700; font-size: 15px; letter-spacing: .2px; cursor: pointer;
            display: flex; align-items: center; justify-content: center; gap: 8px;
            border-radius: 14px; transition: .2s; line-height: 1.2;
        }
        .q-btn-buy-now:hover { opacity: .88; }
        .q-btn-buy-now .q-buy-price { font-weight: 800; white-space: nowrap; }
        .q-buy-trust {
            text-align: center; font-size: 11px; color: var(--c-muted);
            margin-top: 2px; letter-spacing: .2px;
        }

        /* ── Related products ── */
        #q-related-products { padding: 0 28px 28px; }
        #q-related-products h4 {
            font-family: var(--font-display); font-size: 13px;
            letter-spacing: 3px; text-transform: uppercase;
            color: var(--c-muted); margin: 20px 0 12px; font-weight: 400;
        }
        .q-related-grid {
            display: flex; gap: 10px; overflow-x: auto; padding-bottom: 4px;
            -webkit-overflow-scrolling: touch;
        }
        .q-related-grid::-webkit-scrollbar { display: none; }
        .q-related-card {
            flex: 0 0 calc(33.333% - 7px); min-width: 88px;
            text-decoration: none; color: var(--c-ink);
            display: flex; flex-direction: column; gap: 6px;
        }
        .q-related-card img {
            width: 100%; aspect-ratio: 1/1; object-fit: cover;
            border: 1px solid var(--c-line); display: block; border-radius: 3px;
        }
        .q-related-card-name {
            font-size: 10px; font-weight: 500; line-height: 1.4; color: var(--c-ink);
            overflow: hidden; display: -webkit-box;
            -webkit-line-clamp: 2; -webkit-box-orient: vertical;
        }

        /* Desktop result split */
        @media (min-width: 768px) {
            .q-card-ia.is-result { width: 780px !important; max-width: 90vw !important; max-height: 92vh !important; }
                /* .q-powered-footer always visible */
            .q-card-ia.is-result .q-content-scroll {
                padding: 0 !important; overflow-y: auto !important;
                display: flex !important; flex-direction: column !important;
            }
            .q-card-ia.is-result #q-step-result {
                display: flex !important; flex-direction: row !important;
                flex-wrap: wrap !important; width: 100%; align-items: stretch; gap: 0;
            }
            .q-card-ia.is-result .q-res-title {
                flex-basis: 100%; order: -1;
                font-size: 16px; letter-spacing: 3px;
                padding: 16px 24px; border-bottom: 1px solid var(--c-line);
            }
            .q-card-ia.is-result #q-result-img-col {
                width: 44% !important; min-height: 360px !important;
                border-right: 1px solid var(--c-line); flex-shrink: 0;
            }
            .q-card-ia.is-result #q-result-img-col img {
                width: 100% !important; height: 100% !important;
                object-fit: cover !important; object-position: top center !important;
            }
            .q-card-ia.is-result #q-result-actions-col {
                width: 56% !important; padding: 28px 24px !important;
                display: flex !important; flex-direction: column !important;
                justify-content: flex-start; gap: 10px;
                overflow-y: auto;
            }
            .q-card-ia.is-result #q-related-products { padding: 0; margin-top: 4px; }
            .q-card-ia.is-result .q-res-mobile-only { display: flex !important; }
        }

        /* ── Error screen ── */
        #q-step-error {
            display: none; flex-direction: column; gap: 20px;
            align-items: center; text-align: center;
            padding: 52px 28px;
        }
        #q-step-error h2 {
            font-family: var(--font-display); font-size: 18px;
            letter-spacing: 3px; text-transform: uppercase; margin: 0; font-weight: 400;
        }
        #q-step-error p { font-size: 13px; color: var(--c-muted); margin: 0; line-height: 1.6; }

        /* ── Footer ── */
        .q-powered-footer {
            background: var(--c-surface); padding: 14px 20px;
            display: flex; align-items: center; justify-content: center; gap: 9px;
            flex-shrink: 0; border-top: 1px solid var(--c-line); text-decoration: none;
        }
        .q-powered-footer span { font-size: 9.5px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--c-muted); }
        .q-quantic-logo { height: 20px; opacity: 0.7; }
/* ====== ESCOLHER LENTES ====== */

        .q-btn-lentes {
            width: 100%; margin-top: 9px; padding: 12px 16px;
            display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
            background: var(--c-ink); color: #fff; border: 1px solid var(--c-ink); border-radius: 14px;
            font-family: var(--font-body); cursor: pointer; box-sizing: border-box; transition: background .2s;
        }
        .q-btn-lentes:hover { background: #5e375e; border-color: #5e375e; }
        .q-btn-lentes .q-lentes-t { font-size: 14px; font-weight: 700; letter-spacing: .4px; line-height: 1.2; }
        .q-btn-lentes .q-lentes-s { font-size: 10.5px; font-weight: 500; opacity: .92; line-height: 1.2; }
        /* botao secundario "COMPRAR SOMENTE A ARMACAO": IGUAL ao primario (.q-btn-black)
           em tamanho, so troca o rosa por PRETO. flex centraliza o texto; font-size/
           letter-spacing um tico menores pro rotulo (mais longo) caber em 1 linha. */
        #q-so-armacao {
            width: 100%; height: 52px; margin-top: 9px; box-sizing: border-box;
            display: flex; align-items: center; justify-content: center;
            background: var(--c-ink); color: #fff; border: none; border-radius: 14px;
            font-family: var(--font-display); font-size: 13px; letter-spacing: 2px;
            text-transform: uppercase; white-space: nowrap; cursor: pointer; transition: opacity .2s;
        }
        #q-so-armacao:hover { opacity: .88; }
        /* botao ESCOLHER LENTES E COMPRAR na PAGINA DO PRODUTO (abaixo do comprar) */
        .q-btn-lentes-produto {
            /* margem EMBAIXO: o botao fica acima do COMPRAR, entao o respiro separa os dois */
            width: 100%; margin: 10px 0 16px; padding: 14px 16px; box-sizing: border-box;
            display: flex; align-items: center; justify-content: center; gap: 9px;
            background: var(--c-ink); color: #fff; border: none; border-radius: 0;
            font-family: 'Work Sans', var(--font-body), sans-serif; font-size: 11px; font-weight: 700;
            letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: opacity .2s;
        }
        .q-btn-lentes-produto svg { width: 17px; height: 17px; flex-shrink: 0; }

        /* Barra fixa do scroll: tira estreita — botoes menores que na pagina */
        .q-btn-lentes-produto.q-btn-lentes-compacto {
            height: 34px !important; margin: 4px 0 6px; padding: 0 10px;
            font-size: 9.5px; letter-spacing: 1px; gap: 6px;
        }
        .q-btn-lentes-produto.q-btn-lentes-compacto svg { width: 13px; height: 13px; }
        .q-btn-inline-provador.q-btn-provador-compacto {
            height: 34px; margin: 6px 0 4px; font-size: 11.5px;
        }
        .q-btn-inline-provador.q-btn-provador-compacto svg { width: 12px; height: 12px; }

        .q-btn-lentes-produto:hover { opacity: .9; }

/* atributo hidden manda: sem isso, classes com display:flex (.q-lendo etc.)
   vencem o [hidden] por ordem de fonte e o elemento aparece cedo demais */
#q-modal-ia [hidden] { display: none !important; }

/* ===== fluxo ESCOLHER LENTES (mesma linguagem visual do provador) ===== */
#q-step-lentes, #q-step-receita, #q-step-upload, #q-step-lentes-tel, #q-step-uso, #q-step-lente-final {
    display: none; flex-direction: column; padding: 26px 28px 30px; gap: 0;
}
.q-passos { display:flex; gap:5px; margin-bottom:20px; }
.q-passos i { height:3px; flex:1; background:var(--c-line); border-radius:2px; }
.q-passos i.on   { background:var(--c-ink); }
.q-passos i.done { background:var(--c-accent); opacity:.45; }

.q-opt {
    width:100%; text-align:left; background:var(--c-bg);
    border:1.5px solid var(--c-line); border-radius:14px;
    padding:15px 16px; margin-bottom:10px; cursor:pointer; font-family:var(--font-body);
    display:flex; flex-direction:column; gap:3px; transition:border-color .18s, background .18s;
}
.q-opt:hover { border-color:var(--c-ink); background:var(--c-surface); }
.q-opt-t { font-size:14px; font-weight:600; color:var(--c-ink-text, var(--c-ink)); }
.q-opt-s { font-size:11.5px; color:var(--c-muted); line-height:1.45; }
.q-opt-destaque { border-color:var(--c-ink); background:var(--c-surface); }

.q-lente-drop {
    border:2px dashed var(--c-line); border-radius:14px; padding:32px 20px;
    text-align:center; cursor:pointer; transition:border-color .18s, background .18s;
}
.q-lente-drop:hover { border-color:var(--c-ink); background:var(--c-surface); }
.q-lente-drop-i { font-size:30px; margin-bottom:8px; }
.q-lente-drop-t { font-size:13.5px; font-weight:600; color:var(--c-ink-text, var(--c-ink)); }
.q-lente-drop-s { font-size:11px; color:var(--c-muted); margin-top:3px; }

.q-lendo { display:flex; flex-direction:column; align-items:center; gap:12px; padding:22px 10px;
           font-size:12.5px; color:var(--c-muted); }
.q-lendo img { max-width:140px; max-height:180px; border-radius:10px;
               border:1px solid var(--c-line); box-shadow:0 4px 14px rgba(0,0,0,.10); }
.q-lendo-arq { font-size:11px; font-weight:600; color:var(--c-ink-text, var(--c-ink));
               word-break:break-all; text-align:center; max-width:220px; }
.q-spin { width:26px; height:26px; border:2.5px solid var(--c-line);
          border-top-color:var(--c-ink); border-radius:50%; animation:q-spin .8s linear infinite; }
@keyframes q-spin { to { transform: rotate(360deg); } }

.q-banner-ia { background:var(--c-surface); border:1px solid var(--c-line); border-radius:11px;
               padding:11px 13px; font-size:11.5px; line-height:1.5; color:var(--c-ink-text, var(--c-ink));
               margin-bottom:14px; }
.q-erro-leitura { background:#fff5f5; border:1px solid #fbc4c4; border-radius:11px;
                  padding:11px 13px; font-size:11.5px; line-height:1.55; color:#9b2c2c; margin-top:10px; }
.q-erro-leitura a { color:#9b2c2c; font-weight:700; text-decoration:underline; cursor:pointer; }

.q-olho { border:1.5px solid var(--c-line); border-radius:13px; padding:12px 13px; margin-bottom:11px; }
.q-olho-tag { font-size:10px; text-transform:uppercase; letter-spacing:.1em; color:var(--c-muted);
              font-weight:600; display:block; margin-bottom:9px; }
.q-olho-campos { display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; }
.q-olho-campos label { font-size:9.5px; text-transform:uppercase; letter-spacing:.06em;
                       color:var(--c-muted); display:flex; flex-direction:column; gap:4px; }
.q-olho-campos select { border:1.5px solid var(--c-line); border-radius:9px; padding:8px 6px;
                        font-size:12.5px; font-family:var(--font-body); background:var(--c-bg);
                        color:var(--c-ink-text, var(--c-ink)); }

.q-card-lente { border:2px solid var(--c-ink); border-radius:14px; padding:17px; margin-bottom:12px; }
/* foto do produto vinda da loja (1024px: deixamos o browser reduzir) */
.q-lente-foto { width:100%; max-width:190px; height:auto; display:block; margin:0 auto 13px;
                border-radius:10px; background:var(--c-surface); }
.q-opt-lente { flex-direction:row; align-items:center; gap:12px; }
.q-opt-lente.is-selected { border-color:var(--c-ink); background:var(--c-surface);
                           box-shadow:0 0 0 1px var(--c-ink); }
.q-opt-selected { display:none; margin-left:auto; flex-shrink:0; border-radius:999px;
                  padding:4px 8px; background:var(--c-ink); color:var(--c-bg);
                  font-size:9px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
.q-opt-lente.is-selected .q-opt-selected { display:inline-flex; }
.q-opt-foto  { width:52px; height:52px; object-fit:cover; border-radius:9px; flex-shrink:0;
               background:var(--c-surface); }
.q-opt-txt   { display:flex; flex-direction:column; gap:3px; min-width:0; }
.q-card-lente-status { display:inline-flex; align-items:center; border-radius:999px;
                       padding:5px 9px; margin-bottom:11px; background:var(--c-ink);
                       color:var(--c-bg); font-size:9px; font-weight:700;
                       letter-spacing:.08em; text-transform:uppercase; }
.q-card-lente-nome { font-size:14px; font-weight:600; line-height:1.35; }
.q-card-lente-mat  { font-size:11px; color:var(--c-muted); margin:3px 0 11px; }
.q-card-lente-preco{ font-size:27px; font-weight:700; }
.q-card-lente-parc { font-size:11.5px; color:var(--c-muted); margin-top:1px; }
.q-card-lente-pq   { background:var(--c-surface); border-radius:10px; padding:11px 12px;
                     margin-top:13px; font-size:12px; line-height:1.5; }
.q-card-lente-pq b { display:block; font-size:9.5px; text-transform:uppercase; letter-spacing:.1em;
                     color:var(--c-muted); margin-bottom:4px; }
.q-grau-anotado { background:var(--c-bg); border:1px solid var(--c-line); border-radius:10px;
                  padding:11px 12px; margin-top:11px; display:flex; flex-direction:column; gap:3px;
                  font-size:12.5px; font-variant-numeric:tabular-nums; }
.q-grau-anotado b { font-size:9.5px; text-transform:uppercase; letter-spacing:.1em;
                    color:var(--c-muted); margin-bottom:3px; }
.q-disclaimer { font-size:10.5px; color:var(--c-muted); line-height:1.5; margin-top:11px;
                padding-top:11px; border-top:1px solid var(--c-line); }
.q-resumo { font-size:11.5px; color:var(--c-muted); line-height:1.6; margin-bottom:8px; }

.q-sair, .q-voltar { display:block; text-align:center; font-size:11.5px; color:var(--c-muted);
                     text-decoration:underline; cursor:pointer; margin-top:12px; }
.q-sair:hover, .q-voltar:hover { color:var(--c-ink); }
.q-btn-sub { display:block; font-size:10px; font-weight:500; opacity:.8; margin-top:2px;
             letter-spacing:.02em; text-transform:none; }
.q-btn-outline .q-btn-sub { color:var(--c-muted); opacity:1; }
/* alternativas de lente (bloco que a Maxilook nao usava) */
.q-alt-titulo { font-size:9.5px; text-transform:uppercase; letter-spacing:.1em; color:var(--c-muted);
                font-weight:600; margin:16px 0 8px; }

/* botao em estado "adicionando": bolinha girando + travado contra clique duplo */
.q-btn-black[disabled], .q-btn-outline[disabled] { opacity:.75; cursor:default; pointer-events:none; }
.q-add-spin { display:inline-block; width:14px; height:14px; margin-right:8px; vertical-align:-2px;
              border:2px solid rgba(255,255,255,.45); border-top-color:#fff; border-radius:50%;
              animation:q-add-gira .8s linear infinite; }
.q-btn-outline .q-add-spin { border-color:rgba(0,0,0,.25); border-top-color:var(--c-ink); }
@keyframes q-add-gira { to { transform: rotate(360deg); } }



.q-aceite { display:flex; gap:10px; align-items:flex-start; background:var(--c-surface); border:1px solid var(--c-line);
            border-radius:11px; padding:11px 13px; margin:10px 0 12px; font-size:11.5px; line-height:1.55; color:var(--c-ink); cursor:pointer; }
.q-aceite input { margin-top:2px; width:17px; height:17px; flex-shrink:0; accent-color:var(--c-ink); }
.q-btn-wa { width:100%; margin-top:9px; padding:13px 16px; border:none; border-radius:14px; background:#1f8f4e; color:#fff;
            font-family:inherit; font-weight:700; font-size:12.5px; letter-spacing:.3px; cursor:pointer; }
.q-btn-wa:hover { background:#18763f; }
.q-preco-de { font-size:.62em; font-weight:500; color:var(--c-muted); margin-right:4px; }
    `;


    // ─── IMAGEM DO BOTÃO (trigger) ─────────────────────────────────────────────
    const stampImageHTML = `<img src="https://cdn.shopify.com/s/files/1/0636/6334/1746/files/logo_provador.png?v=1772494793" alt="Provador Virtual" style="width:100%;height:100%;object-fit:contain;">`;



    // ─── HTML ─────────────────────────────────────────────────────────────────────


    const html = `
        <div id="q-modal-ia">
            <div class="q-card-ia">
                <button type="button" class="q-close-ia" id="q-close-btn">&times;</button>
                <div class="q-content-scroll">

                    <!-- Persistent header (all steps) -->
                    <div id="q-header-provador">
                        <h1>Provador Virtual</h1>
                        <img src="https://acdn-us.mitiendanube.com/stores/002/439/162/themes/common/logo-5286252365192445087-1786585298-a7c4f258d3ff5f2add88e498a36f1db71786585298-640-0.webp" alt="Otica Sirena" style="height:44px;width:auto;"/>
                    </div>

                    <!-- Main step -->
                    <div id="q-step-photo">
                        <!-- WhatsApp -->
                        <div class="q-phone-wrap">
                            <span class="q-field-label">Seu WhatsApp<span class="q-required-mark">*</span></span>
                            <input type="tel" id="q-phone" class="q-input" placeholder="(11) 99999-9999" maxlength="15">
                            <div id="q-phone-error" class="q-status-msg">N&#250;mero inv&#225;lido</div>
                            <div id="q-provas-restantes" class="q-provas-msg"></div>
                        </div>

                        <!-- Photo section -->
                        <p class="q-section-label">Envie sua foto</p>
                        <div class="q-tip-box">
                            <i class="ph ph-lightbulb"></i>
                            <span>Use uma foto n&#237;tida, de frente, com boa ilumina&#231;&#227;o.</span>
                        </div>

                        <!-- Face frame -->
                        <div class="q-face-frame" id="q-face-frame">
                            <div class="q-face-corner q-face-corner-tl"></div>
                            <div class="q-face-corner q-face-corner-tr"></div>
                            <div class="q-face-corner q-face-corner-bl"></div>
                            <div class="q-face-corner q-face-corner-br"></div>
                            <img id="q-pre-img" alt="Sua foto">
                            <div class="q-face-placeholder" id="q-face-placeholder">
                                <i class="ph ph-user-circle" style="font-size:80px;color:#d4d4d4;"></i>
                            </div>
                        </div>

                        <!-- Upload buttons -->
                        <div class="q-upload-btns">
                            <button class="q-upload-btn" id="q-btn-camera">
                                <i class="ph ph-camera"></i> Tirar foto
                            </button>
                            <button class="q-upload-btn" id="q-btn-gallery">
                                <i class="ph ph-image"></i> Da galeria
                            </button>
                            <input type="file" id="q-camera-input" accept="image/*" capture="user" style="display:none">
                            <input type="file" id="q-gallery-input" accept="image/*" style="display:none">
                        </div>

                        <!-- Terms -->
                        <label class="q-terms-row">
                            <input type="checkbox" id="q-accept-terms">
                            <span>Concordo com os <a href="http://provoulevou.com.br/termos.html" target="_blank">Termos e Condi&#231;&#245;es</a></span>
                        </label>

                        <div id="q-validation-hint" class="q-validation-hint"></div>
                        <button class="q-btn-black" id="q-btn-generate">Provar &#243;culos</button>
                    </div>

                    <!-- PIX -->
                    <div id="q-step-pix">
                        <h2>Prova Extra</h2>
                        <p class="q-pix-subtitle">Limite de 10 provas atingido.<br>Pague R$1 via PIX para mais uma:</p>
                        <p style="font-size: 11px; color: var(--c-muted); margin: 8px 0 0; line-height: 1.5; text-align: center;">&#8505;&#65039; Cobran&#231;a feita pela Provou Levou, n&#227;o pela loja</p>
                        <div class="q-pix-qr"><img id="q-pix-qr-img" alt="QR Code PIX"></div>
                        <div class="q-pix-copiacola">
                            <input type="text" id="q-pix-code" readonly placeholder="C&#243;digo PIX...">
                            <button id="q-pix-copy-btn">Copiar</button>
                        </div>
                        <div id="q-pix-status-msg" class="q-pix-status q-pix-waiting">Aguardando pagamento...</div>
                        <p class="q-pix-cancel" id="q-pix-cancel">Cancelar</p>
                    </div>

                    <!-- Loading -->
                    <div id="q-loading-box">
                        <div class="q-loading-texts">
                            <div class="q-loading-t1">Gerando sua prova...</div>
                            <a href="https://provoulevou.com.br?utm_source=widget&utm_medium=lojista&utm_campaign=sirena" target="_blank" class="q-loading-t2">
                                <span>Powered by</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAoCAMAAAA2Yc1OAAAAYFBMVEUAAAB2Muz18f18DvaRWfFsZ/wAAP8AAAAAAAAAAAB8Oe17Ou3/AP+pVP+0jvTJr/dVVaqHO/t/AH+AO/R/P7+AO/SAO/QAAAB7Oe0AAACDPfp9O/V7Oe17OOwAAAB7OezQS/HyAAAAIHRSTlNg6f8E/gMBry/Sr08BA//+AyMCawTFlQD8+/4Kki6QcnVUoNsAAAaeSURBVHja3ZoJc9sqEIBFEKADOc7RhyyE9P//ZXeX21frmcZvEqbjRIBcPu29SmPSEPZoqiGsMD9jNAlJwoe2gochLKfpn0QpgcZ9DGwuBhtWZwzXTz6RlF9FCWIbf83LspSUcLn8Gn+EOBuvlnyoCTPpwM3xmQeyML6EkhvLrjISJ3NPlKY1+7Ksxv57Sq7vQALmbCX//pTCDHcgUZr2KL875QRfXGMx+ldg7rDpe1NKac9k176+vBzqKWv0/0Ap0BN5nwDxO59AQ1CnmDPZz8laHmfzFi5qG2usGWtRti84Xs+EaZ9OGV2evOX70rz4owiac6tkry8tm+GjskxDz6aBYUy39X2vms4UU41S6K27TdFaXgmjgwu8oaF7ty5NlhsqSkxT9nXdITE5Gu3cmzUyZA32zTkJs3xch2H9wNQF1uxb2sKdc6K2yzOFZS8vDAV6YJcqu51OPX74QSdUaaqhi7x2wpU4cKUzTR/XFSHTpB/4FSWlCGnKMrPRfGoI5yxYzQRiWQZw+yNbaMwrN9yaNSqBJCRneEnpzs0SpMhaFGgxHKUGcBSVIE+nzR9fNQGsP5VrW8GAyMo0xToulZRNTYkukVIx/FyNRAfpz00MyyiBal58pMOQzv9EeSWMgG3WwWQkL+sJ+6YDDc3iQ7heqa6Pa0G04TlEho4gFW6gx3FPlgL9/jKMzo1gT+1OZN45WIl+xIYN1rqdYp19mBJMszLLmnLLBz8FJe2j/qlyTfmDJ71OWu6/SN2h5KBg8IPGSmIklX03ProjTt4AAPjro5QoSXaLMtlaQ4dWaeqUofxak6i6eBllS8p9hxKPPJjJCixxGUCQAPHgOiAAOzsKqzX38f5BWTIfSWqzLCiz3yR5qDjVVGt9EJ7KRleItngMN7wP/JfujWO8tHxHMXLmVRYVdmHCshTeNCdDfYSSUUrQHiBglpwFpan8Zj57eeSwM23vETcrdHhE221KlFyOoXMQFcYzUtidXKYL6XXQ4QcoD16MHpbdp4wkfXnM0t10QbzduTMK4LcpUQf3NOjMxAWn8MzwGFiMjlaSfv8tJSlrm34/QExh55T9LUp1SellGKPEI5RriCEhIOKZJUMZWogpQGTGHD+NNQ9Qevllt8MO2Tz/gvKKLONcj3zdo5RzHa8N4VnUzpEuWMS4pOS3KNl8bovA/BqnrmpsH+wyU9Z22QVV7fzKI3aJRmjLIaJvtVjvci/LUA5OZ3apS1lyO8lM2QbBtW2KJq9RvLd9bJ8pr/hYnxlFcd/3sercLtlFbo5uR4akwWcGAVOQw11zmu8Spa9dAmUqtlpvmGih5HyCqd6Kl1umNJdrwSJ7j189BhXjZZMfWUFJxxSThjFN7r919zkP6CV0NRwGFAw1nKpe8e5CBF1WTdmRTvkgiPVjhKdBlG1W1gNCJci5pZmbuU9XUG55rTtFKeFclOEpi87nSV1WYnW6iJcrtoglF2Zt28F8SlJWB9mcfAdxMUTGkgsKM8wQuDdOaCRPFh8FUYJUF9R9jZTgZ1LUQJ+D4bJloWfAGHKXeSzWE10EzpRkp4rKsPwwwh35uWDR1akA3FeJbZn7eGnQ8FnP0XwSjU8GPnEWvRBleJTjFrfsS9BYzpEX0mCsSSBvhajhR8h9WhYnUJnxHhE1NpcVylSUXVlyqHKuyF7L2qwsUs5yH+q3jVZzt3qxkrktvgh8RzXFqngHBbUjZevCV5Ahv/eUPqTg7VBfstAeCD0C5m0zT+FVUV+qsvCqfEqnqqIsCbhKb/3ou3qiqSsvbhzDwooxLKwGTt01LXBuoOft+45xAyKhZs9Ui4GTGpagsQPMtSN2RLC2ObzCOOCIGfvBixd/xK8O7r5R6EE3L6Bm24ooSEuwlkMKrjflBirTmuoG3N/574my5NQHT0WyjN0SrCwn/zYgbVgGi80CoddwvXsfxelZgCg1byZSfJZGSgqKGbCAz8vI/yUvSWJjAxykWwfGBmx4yLgGnY7YTUwb6GWOX3cfK3RIQKVhX8wJ3ixlBVywu+1YVPvwSujrKfPQvHobd2+Dfvc/j+dtL0N2JpBSXO0WXKm7nkOZG45HK+T7ZItETQpRNq1wgzwWb12hVIPOpcZOZdpHTc0GM6T1fm99jU3nZ8ryX79BkJO89woBXFzUme9MCRoubksTIKU2P4DSaG32+cb7y93ktwdVI/n7vXGHZNCuRd2a6teVUogf89cTE+ZKO3Tk81j38c087W3Xc/5GRF9932P5T4A0vwEkzAGPQIFmHAAAAABJRU5ErkJggg==" alt="Provou Levou">
                            </a>
                        </div>
                        <div class="q-loading-bar"><div></div></div>
                    </div>

                    <!-- Resultado -->
                    <div id="q-step-result">
                        <span class="q-res-title">Veja como ficou em voc&ecirc;</span>
                        <div id="q-result-img-col">
                            <img id="q-final-view-img">
                        </div>
                        <div id="q-result-actions-col">
                            <div class="q-fakebuy" id="q-fakebuy"></div>
                            <div class="q-result-prodinfo" id="q-result-prodinfo" style="display:none;">
                                <div class="q-result-prodname" id="q-result-prodname"></div>
                                <div class="q-result-prodprice" id="q-result-prodprice"></div>
                                <div class="q-result-installment" id="q-result-installment"></div>
                                <div class="q-scarcity" id="q-scarcity" style="display:none;"><i class="ph-bold ph-fire"></i> APENAS <strong id="q-scarcity-n"></strong>&nbsp;UNIDADES RESTANTES</div>
                            </div>
                            <div class="q-seals" id="q-seals" style="display:none;">
                                <div class="q-seal"><i class="ph-fill ph-shield-check"></i><span>Compra<br>Segura</span></div>
                                <div class="q-seal"><i class="ph-fill ph-lock-key"></i><span>Pagamento<br>Seguro</span></div>
                            </div>
                            <button class="q-btn-buy-now" id="q-btn-buy-now" style="display:none;">Comprar Agora</button>
                            <button class="q-btn-lentes" id="q-btn-escolher-lentes" style="display:none;"><span class="q-lentes-t">ESCOLHER LENTES</span><span class="q-lentes-s">a partir de R$ 129,00 &middot; monte seu &oacute;culos completo</span></button>
                            <div id="q-related-products" style="display:none;">
                                <h4>Veja tamb&eacute;m</h4>
                                <div class="q-related-grid" id="q-related-grid"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Erro -->
                    <div id="q-step-error">
                        <h2>ALTA DEMANDA</h2>
                        <p>Aguarde alguns segundos para tentar novamente.</p>
                        <button class="q-btn-outline" id="q-error-back">Voltar ao Produto</button>
                        <div style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(0,0,0,.08);"><p style="font-size:12px;color:var(--c-muted);margin:0 0 8px;">Continua com problema? Fale direto com a Provou Levou:</p><a href="https://wa.me/5511965749173?text=Ol%C3%A1!%20Tive%20um%20problema%20ao%20usar%20o%20provador." target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:#25D366;color:#fff;border-radius:10px;padding:10px 18px;font-family:inherit;font-weight:700;font-size:13px;text-decoration:none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 2.1.55 4.06 1.6 5.8L2 22l4.44-1.65a9.9 9.9 0 0 0 5.6 1.72h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.94 1.34-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36l.55.01c.18.01.42-.07.66.5.24.59.83 2.04.9 2.18.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.71-.17 1.39z"/></svg> Falar com a Provou Levou</a></div>
                    </div>

<!-- ============ ESCOLHER LENTES (Sirena) ============ -->
<div id="q-step-lentes">
    <div class="q-passos"><i class="on"></i><i></i><i></i><i></i></div>
    <span class="q-section-label">Como voc&ecirc; quer seus &oacute;culos?</span>
    <button class="q-opt" data-visao="mono">
        <span class="q-opt-t">Com grau para longe ou perto</span>
        <span class="q-opt-s">Lente monofocal</span></button>
    <button class="q-opt" data-visao="multi">
        <span class="q-opt-t">Com grau multifocal</span>
        <span class="q-opt-s">Diferentes dist&acirc;ncias na mesma lente</span></button>
    <button class="q-opt" data-visao="semgrau">
        <span class="q-opt-t">Sem grau com filtro de luz azul</span>
        <span class="q-opt-s">Prote&ccedil;&atilde;o para as telas, sem receita</span></button>
    <button class="q-opt" data-carrinho="sem">
        <span class="q-opt-t">Somente a arma&ccedil;&atilde;o</span>
        <span class="q-opt-s">Sem lentes</span></button>
</div>

<div id="q-step-receita">
    <div class="q-passos"><i class="done"></i><i class="on"></i><i></i><i></i></div>
    <span class="q-section-label">Qual tratamento voc&ecirc; quer?</span>
    <button class="q-opt" data-trat="A">
        <span class="q-opt-t">Antirreflexo</span>
        <span class="q-opt-s">O essencial, para o dia a dia</span></button>
    <button class="q-opt" data-trat="AB">
        <span class="q-opt-t">Antirreflexo + filtro de luz azul</span>
        <span class="q-opt-s">Prote&ccedil;&atilde;o Digital, para quem passa o dia em telas</span></button>
    <button class="q-opt" data-trat="AF" data-so-mono="1">
        <span class="q-opt-t">Antirreflexo + fotossens&iacute;vel</span>
        <span class="q-opt-s">Escurece no sol, clareia dentro de casa</span></button>
    <button class="q-opt" data-trat="ABF" data-so-mono="1">
        <span class="q-opt-t">Antirreflexo + fotossens&iacute;vel + luz azul</span>
        <span class="q-opt-s">Escurece no sol <b>e</b> protege das telas</span></button>
    <a class="q-voltar" data-ir="q-step-lentes">voltar</a>
    <a class="q-sair" data-carrinho="sem">prefiro s&oacute; a arma&ccedil;&atilde;o</a>
</div>

<div id="q-step-upload">
    <div class="q-passos"><i class="done"></i><i class="done"></i><i class="on"></i><i></i></div>
    <span class="q-section-label">Agora, sua receita</span>
    <input type="file" id="q-arquivo" accept="image/*,application/pdf" hidden>
    <button class="q-opt" id="q-abrir-arquivo">
        <span class="q-opt-t">&#128196; Enviar minha receita</span>
        <span class="q-opt-s">Foto ou arquivo leg&iacute;vel &mdash; a gente l&ecirc; pra voc&ecirc;</span></button>
    <button class="q-opt" data-receita="digitar">
        <span class="q-opt-t">&#9000; Digitar minha receita</span>
        <span class="q-opt-s">Campos separados por olho</span></button>
    <button class="q-opt q-opt-destaque" data-receita="depois">
        <span class="q-opt-t">&#128172; Estou sem a receita</span>
        <span class="q-opt-s">Escolha a lente agora e envie a receita depois pelo WhatsApp</span></button>

    <div id="q-lendo" class="q-lendo" hidden>
        <img id="q-thumb" alt="" hidden>
        <div class="q-lendo-arq" id="q-arq-nome"></div>
        <div class="q-spin"></div>
        <div>Lendo sua receita&hellip;</div>
    </div>
    <div id="q-erro-leitura" class="q-erro-leitura" hidden></div>

    <a class="q-voltar" data-ir="q-step-receita">voltar</a>
    <a class="q-sair" data-carrinho="sem">prefiro s&oacute; a arma&ccedil;&atilde;o</a>
</div>

<div id="q-step-uso">
    <div class="q-passos"><i class="done"></i><i class="done"></i><i class="done"></i><i class="on"></i></div>
    <span class="q-section-label">Voc&ecirc; quer estes &oacute;culos para longe ou para perto?</span>
    <div class="q-tip-box" style="margin-bottom:16px;">
        <i class="ph ph-lightbulb"></i>
        <span>Sua receita tem adi&ccedil;&atilde;o (grau de perto). A lente monofocal atende uma dist&acirc;ncia s&oacute;.</span>
    </div>
    <button class="q-opt" data-uso="longe">
        <span class="q-opt-t">Para longe</span>
        <span class="q-opt-s">Dirigir, TV, rua</span></button>
    <button class="q-opt" data-uso="perto">
        <span class="q-opt-t">Para perto</span>
        <span class="q-opt-s">Leitura, celular</span></button>
    <a class="q-voltar" data-ir="q-step-lente-final">voltar</a>
</div>

<div id="q-step-lentes-tel">
    <div class="q-passos"><i class="on"></i><i></i><i></i><i></i></div>
    <span class="q-section-label">Qual &eacute; o seu WhatsApp?</span>
    <div class="q-tip-box" style="margin-bottom:16px;">
        <i class="ph ph-lightbulb"></i>
        <span>Guardamos sua escolha de lente e te ajudamos pelo WhatsApp se precisar.</span>
    </div>
    <input type="tel" id="q-lentes-tel" class="q-input" placeholder="(11) 99999-9999" maxlength="15" inputmode="numeric">
    <div id="q-lentes-tel-erro" class="q-status-msg" style="display:none;"></div>
    <button class="q-opt q-opt-destaque" id="q-lentes-tel-ok" style="margin-top:16px;text-align:center;align-items:center;">
        <span class="q-opt-t">Continuar</span></button>
</div>

<div id="q-step-lente-final">
    <div class="q-passos"><i class="done"></i><i class="done"></i><i class="done"></i><i class="on"></i></div>
    <span class="q-section-label" id="q-lente-titulo">Sua receita</span>

    <div id="q-banner-ia" class="q-banner-ia" hidden></div>

    <div id="q-form-receita">
        <div class="q-olho"><span class="q-olho-tag">Olho direito (OD)</span>
            <div class="q-olho-campos">
                <label>Esf&eacute;rico<select data-r="odEsf"></select></label>
                <label>Cil&iacute;ndrico<select data-r="odCil"></select></label>
                <label>Eixo<select data-r="odEixo"></select></label>
            </div></div>
        <div class="q-olho"><span class="q-olho-tag">Olho esquerdo (OE)</span>
            <div class="q-olho-campos">
                <label>Esf&eacute;rico<select data-r="oeEsf"></select></label>
                <label>Cil&iacute;ndrico<select data-r="oeCil"></select></label>
                <label>Eixo<select data-r="oeEixo"></select></label>
            </div></div>
        <div class="q-olho" id="q-bloco-adicao">
            <span class="q-olho-tag" id="q-adicao-tag">Adi&ccedil;&atilde;o &mdash; o grau de perto</span>
            <div class="q-olho-campos" style="grid-template-columns:1fr;">
                <label>Adi&ccedil;&atilde;o<select data-r="adicao"></select></label>
            </div>
        </div>
        <div id="q-aviso-campo" class="q-erro-leitura" hidden></div>
        <button class="q-btn-black" id="q-ver-lente" style="margin-top:6px;">VER MINHA LENTE</button>
    </div>

    <div id="q-resultado-lente" hidden>
        <div id="q-card-lente" class="q-card-lente"></div>
        <div id="q-alternativas"></div>
        <div id="q-resumo-lente" class="q-resumo"></div>
        <label id="q-aceite-box" class="q-aceite" hidden>
            <input type="checkbox" id="q-aceite">
            <span>Voc&ecirc; pode escolher suas lentes agora e enviar a receita depois pelo WhatsApp. Confirmaremos o &iacute;ndice e o valor ap&oacute;s conferir seu grau. Qualquer mudan&ccedil;a ser&aacute; combinada com voc&ecirc;. <b>Entendi e concordo.</b></span>
        </label>
        <button class="q-btn-black" id="q-add-lente">COMPRAR ARMA&Ccedil;&Atilde;O + LENTE</button>
        <button class="q-btn-outline" id="q-so-armacao" data-carrinho="sem" style="margin-top:9px;">COMPRAR SOMENTE A ARMA&Ccedil;&Atilde;O</button>
        <button class="q-btn-wa" id="q-wa-receita" hidden>&#128172; ENVIAR MINHA RECEITA PELO WHATSAPP</button>
    </div>

    <a class="q-voltar" data-ir="q-step-upload">voltar</a>
</div>

                </div>
                <a href="https://provoulevou.com.br?utm_source=widget&utm_medium=lojista&utm_campaign=sirena" target="_blank" class="q-powered-footer">
                    <span>Powered by</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAoCAMAAAA2Yc1OAAAAYFBMVEUAAAB2Muz18f18DvaRWfFsZ/wAAP8AAAAAAAAAAAB8Oe17Ou3/AP+pVP+0jvTJr/dVVaqHO/t/AH+AO/R/P7+AO/SAO/QAAAB7Oe0AAACDPfp9O/V7Oe17OOwAAAB7OezQS/HyAAAAIHRSTlNg6f8E/gMBry/Sr08BA//+AyMCawTFlQD8+/4Kki6QcnVUoNsAAAaeSURBVHja3ZoJc9sqEIBFEKADOc7RhyyE9P//ZXeX21frmcZvEqbjRIBcPu29SmPSEPZoqiGsMD9jNAlJwoe2gochLKfpn0QpgcZ9DGwuBhtWZwzXTz6RlF9FCWIbf83LspSUcLn8Gn+EOBuvlnyoCTPpwM3xmQeyML6EkhvLrjISJ3NPlKY1+7Ksxv57Sq7vQALmbCX//pTCDHcgUZr2KL875QRfXGMx+ldg7rDpe1NKac9k176+vBzqKWv0/0Ap0BN5nwDxO59AQ1CnmDPZz8laHmfzFi5qG2usGWtRti84Xs+EaZ9OGV2evOX70rz4owiac6tkry8tm+GjskxDz6aBYUy39X2vms4UU41S6K27TdFaXgmjgwu8oaF7ty5NlhsqSkxT9nXdITE5Gu3cmzUyZA32zTkJs3xch2H9wNQF1uxb2sKdc6K2yzOFZS8vDAV6YJcqu51OPX74QSdUaaqhi7x2wpU4cKUzTR/XFSHTpB/4FSWlCGnKMrPRfGoI5yxYzQRiWQZw+yNbaMwrN9yaNSqBJCRneEnpzs0SpMhaFGgxHKUGcBSVIE+nzR9fNQGsP5VrW8GAyMo0xToulZRNTYkukVIx/FyNRAfpz00MyyiBal58pMOQzv9EeSWMgG3WwWQkL+sJ+6YDDc3iQ7heqa6Pa0G04TlEho4gFW6gx3FPlgL9/jKMzo1gT+1OZN45WIl+xIYN1rqdYp19mBJMszLLmnLLBz8FJe2j/qlyTfmDJ71OWu6/SN2h5KBg8IPGSmIklX03ProjTt4AAPjro5QoSXaLMtlaQ4dWaeqUofxak6i6eBllS8p9hxKPPJjJCixxGUCQAPHgOiAAOzsKqzX38f5BWTIfSWqzLCiz3yR5qDjVVGt9EJ7KRleItngMN7wP/JfujWO8tHxHMXLmVRYVdmHCshTeNCdDfYSSUUrQHiBglpwFpan8Zj57eeSwM23vETcrdHhE221KlFyOoXMQFcYzUtidXKYL6XXQ4QcoD16MHpbdp4wkfXnM0t10QbzduTMK4LcpUQf3NOjMxAWn8MzwGFiMjlaSfv8tJSlrm34/QExh55T9LUp1SellGKPEI5RriCEhIOKZJUMZWogpQGTGHD+NNQ9Qevllt8MO2Tz/gvKKLONcj3zdo5RzHa8N4VnUzpEuWMS4pOS3KNl8bovA/BqnrmpsH+wyU9Z22QVV7fzKI3aJRmjLIaJvtVjvci/LUA5OZ3apS1lyO8lM2QbBtW2KJq9RvLd9bJ8pr/hYnxlFcd/3sercLtlFbo5uR4akwWcGAVOQw11zmu8Spa9dAmUqtlpvmGih5HyCqd6Kl1umNJdrwSJ7j189BhXjZZMfWUFJxxSThjFN7r919zkP6CV0NRwGFAw1nKpe8e5CBF1WTdmRTvkgiPVjhKdBlG1W1gNCJci5pZmbuU9XUG55rTtFKeFclOEpi87nSV1WYnW6iJcrtoglF2Zt28F8SlJWB9mcfAdxMUTGkgsKM8wQuDdOaCRPFh8FUYJUF9R9jZTgZ1LUQJ+D4bJloWfAGHKXeSzWE10EzpRkp4rKsPwwwh35uWDR1akA3FeJbZn7eGnQ8FnP0XwSjU8GPnEWvRBleJTjFrfsS9BYzpEX0mCsSSBvhajhR8h9WhYnUJnxHhE1NpcVylSUXVlyqHKuyF7L2qwsUs5yH+q3jVZzt3qxkrktvgh8RzXFqngHBbUjZevCV5Ahv/eUPqTg7VBfstAeCD0C5m0zT+FVUV+qsvCqfEqnqqIsCbhKb/3ou3qiqSsvbhzDwooxLKwGTt01LXBuoOft+45xAyKhZs9Ui4GTGpagsQPMtSN2RLC2ObzCOOCIGfvBixd/xK8O7r5R6EE3L6Bm24ooSEuwlkMKrjflBirTmuoG3N/574my5NQHT0WyjN0SrCwn/zYgbVgGi80CoddwvXsfxelZgCg1byZSfJZGSgqKGbCAz8vI/yUvSWJjAxykWwfGBmx4yLgGnY7YTUwb6GWOX3cfK3RIQKVhX8wJ3ixlBVywu+1YVPvwSujrKfPQvHobd2+Dfvc/j+dtL0N2JpBSXO0WXKm7nkOZG45HK+T7ZItETQpRNq1wgzwWb12hVIPOpcZOZdpHTc0GM6T1fm99jU3nZ8ryX79BkJO89woBXFzUme9MCRoubksTIKU2P4DSaG32+cb7y93ktwdVI/n7vXGHZNCuRd2a6teVUogf89cTE+ZKO3Tk81j38c087W3Xc/5GRF9932P5T4A0vwEkzAGPQIFmHAAAAABJRU5ErkJggg==" class="q-quantic-logo" alt="Provou Levou">
                </a>
            </div>
        </div>
    `;


    // ─── INIT ─────────────────────────────────────────────────────────────────────


    // ─── CTA DE COMPRA NO RESULTADO ───────────────────────────────────────────────

    // Caminho do checkout da Nuvemshop. Se na loja o checkout direto não abrir,
    // troque para '/comprar/' por '/carrinho' (1 linha) — é o único ponto a validar ao vivo.
    var Q_CHECKOUT_URL = '/comprar/';

    function getMainPrice() {
        // 1) preço exibido na página (vários temas Nuvemshop)
        var sel = '.js-price-display, [data-product-price], .product__price .price, .js-product-price, .price-display';
        var el = document.querySelector(sel);
        if (el) {
            var t = (el.getAttribute('data-product-price') || el.textContent || '').trim();
            if (t && /\d/.test(t)) {
                // normaliza "R$ 289,00" / "28900" -> "R$ 289,00"
                if (/^\d+$/.test(t)) { var n = (parseInt(t,10)/100).toFixed(2).replace('.',','); return 'R$ ' + n; }
                return t.replace(/\s+/g,' ');
            }
        }
        // 2) fallback: data-variants do produto principal (mesmo formato dos "Veja também")
        var dv = document.querySelector('[data-variants]');
        if (dv) {
            try { var v = JSON.parse(dv.getAttribute('data-variants'))[0]; if (v && v.price_short) return v.price_short; } catch (e) {}
        }
        return '';
    }

    function findStoreBuyBtn() {
        return document.querySelector('.js-addtocart, .btn-add-to-cart, [data-component="product.add-to-cart"], button[type="submit"].js-addtocart');
    }

    // Acha o form de produto real (o que tem o input add_to_cart = product_id)
    function getProductForm() {
        var f = document.getElementById('product_form');
        if (f && f.querySelector('input[name="add_to_cart"]')) return f;
        var inp = document.querySelector('input[name="add_to_cart"]');
        if (inp && inp.closest('form')) return inp.closest('form');
        return document.querySelector('form.js-product-form');
    }

    // Compra de verdade: submete uma CÓPIA do form do produto (POST real).
    // A Nuvemshop só adiciona ao carrinho via POST — o GET antigo abria o
    // carrinho vazio. O clone não tem o AJAX do tema, então faz POST nativo:
    // servidor adiciona o item e redireciona pro carrinho JÁ com o produto.
    function buyNow() {
        // Tracking: registra o clique em "Comprar Agora" (marca carrinho_adicionado na prova)
        try {
            var _tp = (document.getElementById('q-phone') || {}).value || '';
            var _td = (document.querySelector('h1.product__title,.product-single__title,h1') || {}).innerText || document.title || '';
            fetch('https://n8n.segredosdodrop.com/webhook/pl-provador-buy-click', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone: _tp, origin: location.origin, produto: _td }) }).catch(function () {});
        } catch (e) {}
        var src = getProductForm();
        if (src) {
            var clone = document.createElement('form');
            clone.method = 'post';
            clone.action = src.getAttribute('action') || '/comprar/';
            clone.style.display = 'none';
            src.querySelectorAll('input, select, textarea').forEach(function (el) {
                if (!el.name) return;
                if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
                var h = document.createElement('input');
                h.type = 'hidden'; h.name = el.name; h.value = el.value;
                clone.appendChild(h);
            });
            if (!clone.querySelector('[name="quantity"]')) {
                var q = document.createElement('input');
                q.type = 'hidden'; q.name = 'quantity'; q.value = '1';
                clone.appendChild(q);
            }
            document.body.appendChild(clone);
            clone.submit();
            return;
        }
        // Fallback: botão nativo da loja
        var sb = findStoreBuyBtn();
        if (sb) { try { sb.click(); } catch (e) {} }
    }

    // Escassez — número estável por produto (não muda a cada refresh)
    function scarcityCount(name) {
        var h = 5381, s = String(name || '');
        for (var i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
        var FLOOR = 8, _st = 10 + (h % 4);   // estoque inicial por produto (10..13)
            var _dn = new Date(), _df = (_dn.getHours() * 60 + _dn.getMinutes()) / 1440;
            var _q = _st - Math.floor(_df * 5);   // cai ao longo do dia
            return _q < FLOOR ? FLOOR : _q;        // piso 8
    }
    // Notificações de compra (prova social)
    var Q_FAKE_NAMES = ['Ana C.','Carlos M.','Mariana S.','João P.','Beatriz R.','Pedro A.','Juliana F.','Lucas T.','Fernanda L.','Rafael O.','Camila N.','Bruno G.','Larissa D.','Gabriel V.','Patrícia H.','Thiago B.','Aline M.','Rodrigo S.','Vanessa P.','Felipe C.','Letícia M.','Marcos A.'];
    var Q_FAKE_WHEN = ['agora mesmo','há 1 minuto','há 2 minutos','há 4 minutos','há 6 minutos','há 9 minutos','há 12 minutos'];
    var _fakeBuyTimer = null;
    function _showFakeBuy() {
        var step = document.getElementById('q-step-result');
        var el = document.getElementById('q-fakebuy');
        if (!el || !step || step.style.display === 'none') return;
        var nm = Q_FAKE_NAMES[Math.floor(Math.random() * Q_FAKE_NAMES.length)];
        var wh = Q_FAKE_WHEN[Math.floor(Math.random() * Q_FAKE_WHEN.length)];
        el.innerHTML = '<i class="ph-fill ph-shopping-bag"></i><div><span style="font-size:12.5px;color:var(--c-ink);"><strong>' + nm + '</strong> comprou este produto</span><span>' + wh + ' &middot; compra verificada</span></div>';
        el.classList.add('show');
        clearTimeout(el._hideT);
        el._hideT = setTimeout(function () { el.classList.remove('show'); }, 4500);
    }
    function startFakeBuy() {
        stopFakeBuy();
        setTimeout(_showFakeBuy, 3000);
        _fakeBuyTimer = setInterval(_showFakeBuy, 12000);
    }
    function stopFakeBuy() {
        if (_fakeBuyTimer) { clearInterval(_fakeBuyTimer); _fakeBuyTimer = null; }
        var el = document.getElementById('q-fakebuy'); if (el) el.classList.remove('show');
    }

    // Parcelamento — o MESMO da pagina: pega a MAIOR parcela do produto ("em ate Nx de R$ X").
    // Le do data-variants (mesma fonte do preco). installments_data vem como STRING JSON aninhada.
    function getInstallment() {
        var dv = document.querySelector('[data-variants]');
        if (!dv) return '';
        try {
            var v = JSON.parse(dv.getAttribute('data-variants'))[0];
            var idata = v.installments_data;
            if (!idata) return '';
            if (typeof idata === 'string') idata = JSON.parse(idata);
            var plans = idata[Object.keys(idata)[0]];
            if (!plans) return '';
            var best = null;
            Object.keys(plans).forEach(function (k) {
                var n = parseInt(k, 10);
                var p = plans[k];
                if (n >= 2 && p.installment_value > 0) {
                    var free = p.without_interests === true;
                    if (!best || (free && !best.free) || (free === best.free && n > best.n)) best = { n: n, val: p.installment_value, free: free };
                }
            });
            if (best) return best.n + 'x de R$ ' + Number(best.val).toFixed(2).replace('.', ',');
        } catch (e) {}
        return '';
    }

    function populateBuyCta() {
        var btn = document.getElementById('q-btn-buy-now');
        var trust = document.getElementById('q-seals');
        if (!btn) return;
        // Nome + valor do produto acima do botão
        var price = getMainPrice();
        var prodName = (document.querySelector('h1.product__title,.product-single__title,h1') || {}).innerText || document.title || '';
        var info = document.getElementById('q-result-prodinfo');
        var nameEl = document.getElementById('q-result-prodname');
        var priceEl = document.getElementById('q-result-prodprice');
        if (nameEl) nameEl.textContent = (prodName || '').trim();
        if (priceEl) priceEl.textContent = price || '';
        var instEl = document.getElementById('q-result-installment');
        if (instEl) { var _inst = getInstallment(); instEl.textContent = _inst; instEl.style.display = _inst ? 'block' : 'none'; }
        if (info && ((prodName || '').trim() || price)) info.style.display = 'block';
        // Escassez
        var sc = document.getElementById('q-scarcity');
        var scn = document.getElementById('q-scarcity-n');
        if (sc && scn && (prodName || '').trim()) { scn.textContent = scarcityCount(prodName); sc.style.display = 'flex'; }
        // Notificações de compra: desativadas em todos os provadores
        btn.style.display = 'flex';
        if (trust) trust.style.display = 'flex';
        btn.onclick = buyNow;
    }


    // ─── INIT ─────────────────────────────────────────────────────────────────────


    function init() {
        // --- FILTRO DE CATEGORIA (HAT) ---
        const productNameNormalized = (document.querySelector('h1.product__title,.product-single__title,h1')?.innerText || document.title).toUpperCase();
        if (productNameNormalized.includes('HAT')) {
            return;
        }

        // Fontes (async, não bloqueia render)

        // Phosphor Icons — carregado lazily na primeira abertura do modal
        // (não carrega na init para não impactar o tempo de carregamento da página)

        const styleTag = document.createElement('style');
        styleTag.textContent = styles;
        document.head.appendChild(styleTag);

        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = html;
        document.body.appendChild(modalContainer);

        // Usa a MESMA FONTE da loja no provador (em vez de Bebas Neue / DM Sans)
        try {
            var _bodyF = getComputedStyle(document.body).fontFamily;
            var _h = document.querySelector('h1.product__title,.product-single__title,h1,h2');
            var _headF = _h ? getComputedStyle(_h).fontFamily : _bodyF;
            var _root = document.documentElement;
            if (_bodyF) _root.style.setProperty('--font-body', _bodyF);
            if (_headF) _root.style.setProperty('--font-display', _headF);
        } catch (e) {}


        // ── Botão imagem PNG ──
        const openBtn = document.createElement('button');
        openBtn.className = 'q-btn-trigger-ia';
        openBtn.id = 'q-open-ia';
        openBtn.setAttribute('aria-label', 'Abrir Provador Virtual');
        openBtn.innerHTML = stampImageHTML;


        // .js-swiper-product (container estavel do carrossel) vem ANTES de .js-product-slide
        // (slide individual). Slides sao deslocados/trocados pelo Swiper ao mudar de variante
        // de cor — um botao preso a um slide especifico fica "fora de vista" quando o cliente
        // troca a variante. Preso ao container do swiper, o botao fica fixo visualmente
        // independente de qual slide/variante esta ativo.
        const imgContainers = ['.js-swiper-product', '.js-product-slide', '.product-image-column', '[data-store^="product-image-"]', '.product__media-wrapper', '.product-gallery__media', '.product__media', '.product-image-main', '.product-media-container', '[data-media-id]', '.product__media-item', '.product-gallery', '.product-single__media', '.media-gallery'];

        function tryPlaceTriggerBtn() {
            // 1ª prioridade: container que tenha <img> dentro (evita cair em slide de vídeo)
            for (const sel of imgContainers) {
                const els = document.querySelectorAll(sel);
                for (const el of els) {
                    if (el.querySelector('img')) {
                        if (window.getComputedStyle(el).position === 'static') el.style.position = 'relative';
                        el.appendChild(openBtn);
                        return true;
                    }
                }
            }
            // 2ª prioridade: qualquer container correspondente
            for (const sel of imgContainers) {
                const el = document.querySelector(sel);
                if (el) {
                    if (window.getComputedStyle(el).position === 'static') el.style.position = 'relative';
                    el.appendChild(openBtn);
                    return true;
                }
            }
            return false;
        }

        if (!tryPlaceTriggerBtn()) {
            // Container não pronto ainda (ex: após F5 no mobile).
            // Observa DOM até 5s aguardando o container aparecer.
            const observer = new MutationObserver(() => {
                if (tryPlaceTriggerBtn()) observer.disconnect();
            });
            observer.observe(document.body, { childList: true, subtree: true });

            setTimeout(() => {
                observer.disconnect();
                if (!openBtn.isConnected) {
                    openBtn.style.cssText = 'position:fixed;bottom:30px;right:20px;top:auto;z-index:100;';
                    document.body.appendChild(openBtn);
                }
            }, 5000);
        }


        const modal = document.getElementById('q-modal-ia');

        // ── Botão inline acima do botão de compra ──
        const inlineBtn = document.createElement('button');
        inlineBtn.className = 'q-btn-inline-provador';
        inlineBtn.type = 'button';

        const inlineSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        inlineSvg.setAttribute('viewBox', '0 0 24 24');
        inlineSvg.setAttribute('fill', 'none');
        inlineSvg.setAttribute('stroke', 'currentColor');
        inlineSvg.setAttribute('stroke-width', '1.5');
        inlineSvg.setAttribute('stroke-linecap', 'round');
        inlineSvg.setAttribute('stroke-linejoin', 'round');
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2');
        const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.setAttribute('cx', '12');
        circle1.setAttribute('cy', '7');
        circle1.setAttribute('r', '4');
        inlineSvg.appendChild(path1);
        inlineSvg.appendChild(circle1);
        inlineBtn.appendChild(inlineSvg);

        const inlineBtnText = document.createTextNode('Provador Virtual');
        inlineBtn.appendChild(inlineBtnText);

        function _qInlineClick(e) {
            e.preventDefault();
            e.stopPropagation();
            window.__plBtnSrc = 'carrinho';
            const prodName = document.querySelector('h1.product__title,.product-single__title,h1')?.innerText || document.title;
            applyProduct(detectProduct(prodName));
            populateImageSelector();
            openModal();
        }
        inlineBtn.addEventListener('click', _qInlineClick);

        // Sirena: posiciona o botão inline acima do botão de compra.
        // O form da Nuvemshop pode renderizar async → tenta em loop até o comprar existir.
        function _qPlaceInline() {
            if (inlineBtn.isConnected) return true;
            var buyBtn = document.querySelector('.js-addtocart, .btn-add-to-cart, [data-component="product.add-to-cart"]');
            var buyRow = buyBtn ? (buyBtn.closest('.form-row') || buyBtn) : null;
            if (buyRow && buyRow.parentNode) { buyRow.parentNode.insertBefore(inlineBtn, buyRow.nextSibling); return true; }
            var variantsContainer = document.querySelector('.js-product-variants');
            if (variantsContainer && variantsContainer.parentNode) {
                variantsContainer.parentNode.insertBefore(inlineBtn, variantsContainer.nextSibling); return true;
            }
            return false;
        }

        // A Nuvemshop tem um 2º "Comprar" (.js-scroll-to-form, barra fixa que aparece
        // ao rolar a página) que também casa com ".btn-add-to-cart" e vem ANTES do
        // botão real no DOM — por isso o botão acima só aparecia nele. Aqui garantimos
        // um 2º botão inline, clonado, ancorado especificamente no botão REAL do
        // #product_form (data-component="product.add-to-cart"), do mesmo tamanho dele.
        function _qPlaceInlineReal() {
            var realBtn = document.querySelector('#product_form [data-component="product.add-to-cart"], #product_form .js-addtocart:not(.js-scroll-to-form)');
            if (!realBtn) return false;
            var realRow = realBtn.closest('.form-row') || realBtn;
            if (!realRow.parentNode) return false;
            if (document.querySelector('.q-btn-inline-provador-real')) return true;
            var inlineBtn2 = inlineBtn.cloneNode(true);
            inlineBtn2.classList.add('q-btn-inline-provador-real');
            inlineBtn2.addEventListener('click', _qInlineClick);
            // Abaixo do Comprar (pedido do lojista): insere depois da linha do botao.
            realRow.parentNode.insertBefore(inlineBtn2, realRow.nextSibling);
            return true;
        }
        // Os dois ancoradouros rodavam SEMPRE e neste tema ambos acertam perto do
        // Comprar real -> DOIS botoes iguais na tela. Agora e' um OU outro: tenta o
        // botao real (o certo na Nuvemshop) e so cai no generico se ele nunca aparecer.
        if (!_qPlaceInlineReal()) {
            var _qTries2 = 0;
            var _qIv2 = setInterval(function () {
                _qTries2++;
                if (_qPlaceInlineReal()) { clearInterval(_qIv2); return; }
                if (_qTries2 > 40) {   // ~10s sem achar o botao real: usa o generico
                    clearInterval(_qIv2);
                    if (!_qPlaceInline()) {
                        var _qTries = 0;
                        var _qIv = setInterval(function () {
                            _qTries++;
                            if (_qPlaceInline() || _qTries > 40) clearInterval(_qIv);
                        }, 250);
                    }
                }
            }, 250);
        }
        const genBtn      = document.getElementById('q-btn-generate');
        const nextBtn     = null; // single-step flow — no next button
        const phoneStep   = null;
        const photoStep   = document.getElementById('q-step-photo');
        const uploadStep  = photoStep; // alias for PIX/error refs

        const closeBtn    = document.getElementById('q-close-btn');
        const backBtn     = document.getElementById('q-btn-back');
        const retryBtn    = document.getElementById('q-retry-btn');
        const cameraInput = document.getElementById('q-camera-input');
        const galleryInput= document.getElementById('q-gallery-input');
        const phoneInput  = document.getElementById('q-phone');

        // ── Pré-preenche último número usado (localStorage) ──
        const _PL_LAST_PHONE = 'pl_last_phone';
        try {
            const saved = localStorage.getItem(_PL_LAST_PHONE);
            if (saved && /^\d{10,11}$/.test(saved)) {
                const m = saved.match(/(\d{2})(\d{4,5})(\d{4})/);
                if (m) phoneInput.value = '(' + m[1] + ') ' + m[2] + '-' + m[3];
            }
        } catch (_) {}
        function _savePhoneIfValid() {
            const nums = phoneInput.value.replace(/\D/g, '');
            if (/^\d{10,11}$/.test(nums)) {
                try { localStorage.setItem(_PL_LAST_PHONE, nums); } catch (_) {}
            }
        }
        phoneInput.addEventListener('blur', _savePhoneIfValid);
        const preImg      = document.getElementById('q-pre-img');
        const facePlaceholder = document.getElementById('q-face-placeholder');

        // keep realInput alias so PIX code still works
        const realInput   = galleryInput;

        let userPhoto = null;
        let pixPaymentId = null;
        let selectedProductImgUrl = '';

        // Upgrade Nuvemshop CDN URLs to 1024px version
        function upgradeImgUrl(url) {
            if (url.includes('mitiendanube.com') || url.includes('nuvemshop.com')) {
                return url.replace(/-\d+-\d+\.webp/, '-1024-1024.webp');
            }
            return url;
        }

        // Resolve a URL real de uma <img> lazy-loaded: alguns temas (ex: Nuvemshop)
        // deixam TANTO src QUANTO data-src apontando pro placeholder GIF 1x1 — a URL real
        // so existe no data-srcset. Compartilhado entre o loop principal e a priorizacao
        // do slide ativo (antes cada um resolvia isso de um jeito diferente e incompleto).
        function resolveImgSrc(img) {
            let src = img.dataset?.src || img.getAttribute('data-src') || img.src;
            if (src && src.includes('data:image')) {
                const parentA = img.closest('a');
                if (parentA && parentA.href && !parentA.href.includes('javascript:')) {
                    src = (/\.(jpe?g|png|webp|gif|avif)(\?|#|$)/i.test(parentA.href) ? parentA.href : '');
                } else if (img.getAttribute('data-srcset')) {
                    src = img.getAttribute('data-srcset').split(',')[0].trim().split(' ')[0];
                }
            }
            return src;
        }

        function extractImages() {
            const containersSelectors = '.js-product-slide, .product-image-column, .js-swiper-product, [data-store^="product-image-"], .product__media-wrapper, .product-gallery__media, .product__media, .product-image-main, .product-media-container, [data-media-id], .product__media-item, .product-gallery, .product-single__media, .media-gallery, [data-component="product.gallery"], .swiper-slide:not(.swiper-slide-duplicate), .slider-wrapper';
            const possibleContainers = Array.from(document.querySelectorAll(containersSelectors));
            let imgEls = [];
            possibleContainers.forEach(c => {
                if (!c.closest('#q-modal-ia')) {
                    const foundImgs = c.querySelectorAll('img');
                    imgEls.push(...Array.from(foundImgs));
                }
            });
            let uniqueImgs = [];
            imgEls.forEach(img => {
                let src = resolveImgSrc(img);

                if (!src || src.includes('data:image')) return;

                const lowerSrc = src.toLowerCase();
                const invalidKeywords = ['provador', 'logo', 'provoulevou', 'icon', 'play', 'video', 'transparent', 'placeholder', 'blank', 'spacer'];
                if (invalidKeywords.some(kw => lowerSrc.includes(kw))) return;

                // Filter out tiny images (1x1 pixels, spacers, etc.)
                if (img.naturalWidth > 0 && img.naturalWidth < 50) return;
                if (img.naturalHeight > 0 && img.naturalHeight < 50) return;

                let cleanSrc = src.split('?')[0].replace(/-\d+-\d+\.webp|_\d+x\d+/, '');

                // Upgrade to 1024px version
                src = upgradeImgUrl(src);

                if (!uniqueImgs.some(u => u.split('?')[0].replace(/-\d+-\d+\.webp|_\d+x\d+/, '') === cleanSrc)) {
                    uniqueImgs.push(src);
                }
            });
            if (uniqueImgs.length === 0) {
                const og = document.querySelector('meta[property="og:image"]')?.content;
                if (og) uniqueImgs.push(upgradeImgUrl(og));
            }

            // Prioriza a foto da variante ATUALMENTE selecionada (slide ativo do swiper)
            // como referencia principal. Sem isso, imgs[0] era sempre a 1a imagem do DOM
            // (a variante default carregada na pagina), ignorando a cor/variante que o
            // cliente de fato escolheu antes de abrir o provador.
            // IMPORTANTE: escopar ao .js-swiper-product (galeria principal) -- a pagina tem
            // VARIOS swipers com a mesma classe .swiper-slide-active (miniaturas, banner,
            // depoimentos, relacionados); um seletor generico ".swiper-slide-active img" sem
            // escopo pegava a miniatura (a primeira a aparecer no DOM), nao a foto principal.
            const activeImg = document.querySelector('.js-swiper-product .swiper-slide-active img, .js-product-slide.swiper-slide-active img');
            if (activeImg) {
                let activeSrc = resolveImgSrc(activeImg);
                if (activeSrc && !activeSrc.includes('data:image')) {
                    activeSrc = upgradeImgUrl(activeSrc);
                    const activeClean = activeSrc.split('?')[0].replace(/-\d+-\d+\.webp|_\d+x\d+/, '');
                    const idx = uniqueImgs.findIndex(u => u.split('?')[0].replace(/-\d+-\d+\.webp|_\d+x\d+/, '') === activeClean);
                    if (idx > 0) { uniqueImgs.splice(idx, 1); uniqueImgs.unshift(activeSrc); }
                    else if (idx === -1) { uniqueImgs.unshift(activeSrc); }
                }
            }

            return uniqueImgs.slice(0, 4);
        }

        function populateImageSelector() {
            const imgs = extractImages();
            const group = document.getElementById('q-photo-selector-group');
            if (group) group.style.display = 'none';
            selectedProductImgUrl = imgs[0] || '';
        }

        // -- Tracking de abertura do provador (session anonima) - Provou Levou --
        var WEBHOOK_OPEN_PL = 'https://n8n.segredosdodrop.com/webhook/pl-provador-open';
        function plSid() { try { var s = localStorage.getItem('pl_sid'); if (!s) { s = 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); localStorage.setItem('pl_sid', s); } return s; } catch (e) { return 'nostore'; } }
        function plTrackOpen() { try { fetch(WEBHOOK_OPEN_PL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ session_id: plSid(), origin: location.origin, botao: window.__plBtnSrc || null, produto: (document.querySelector('h1.product-name, h1.product__title, .product-single__title, h1') || {}).innerText || document.title || '' }) }).catch(function () {}); } catch (e) {} }
        function plTrackProved(rawPhone) { try { var d = (rawPhone || '').replace(/\D/g, ''); if (d.length > 11 && d.slice(0, 2) === '55') d = d.slice(2); fetch(WEBHOOK_OPEN_PL, { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ session_id: plSid(), proved: true, telefone_cliente: d || null }) }).catch(function () {}); } catch (e) {} }
        function openModal() {
            plTrackOpen();
            // Lazy-load Phosphor Icons na primeira abertura
            if (!window.phosphorIconsLoaded) {
                var ph = document.createElement('script');
                ph.src = 'https://unpkg.com/@phosphor-icons/web';
                document.head.appendChild(ph);
                window.phosphorIconsLoaded = true;
            }
            modal.style.display = 'flex';
            lockBodyScroll();
            // Mostra contador imediatamente (só por IP) ao abrir o modal
            if (typeof _checkProvasRestantes === 'function') _checkProvasRestantes();
            try { pixResume(); } catch (e) {}
        }


        function closeModal() {
            modal.style.display = 'none';
            unlockBodyScroll();
            try { stopFakeBuy(); } catch (e) {}
            // Volta pra tela inicial do provador ao fechar. Se o cliente fechou DEPOIS
            // de uma prova, ao reabrir (ex: pra testar outra variante/cor do produto)
            // ele ve a tela de upload, nao o resultado antigo preso. Mesmo reset do
            // botao "tirar outra foto" (retryBtn).
            try {
                document.getElementById('q-step-result').style.display = 'none';
                photoStep.style.display = 'flex';
                var _card = document.querySelector('.q-card-ia');
                if (_card) _card.classList.remove('is-result');
                userPhoto = null;
                pixPaymentId = null;
                if (preImg) preImg.style.display = 'none';
                if (facePlaceholder) facePlaceholder.style.display = 'flex';
                // Limpa o value dos inputs de arquivo: o evento change so dispara se o
                // arquivo for diferente do anterior. Sem isso, reabrir e escolher a MESMA
                // foto nao dispara handlePhotoSelected -> "nao deixa enviar outra foto".
                try { cameraInput.value = ''; galleryInput.value = ''; } catch (e) {}
                if (typeof checkFields === 'function') checkFields();
            } catch (e) {}
        }

        /* ── Fechar sem perder a foto ──────────────────────────────────────
           Fechar o provador depois de provar resetava tudo e a foto gerada
           sumia. Agora o resultado fica guardado: ao reabrir pelo selo ou
           pelo botao, o cliente volta direto na foto dele.
           Como a tela de resultado nao tinha saida (o #q-retry-btn e lido no
           JS mas nunca existiu no HTML), adicionamos "Provar outra foto" --
           sem isso o cliente ficaria preso no resultado. */
        function _plTemResultado() {
            var i = document.getElementById('q-final-view-img');
            return !!(i && i.getAttribute('src'));
        }

        function _plNovaProva() {
            var img = document.getElementById('q-final-view-img');
            if (img) img.removeAttribute('src');
            var s = document.getElementById('q-step-result');
            if (s) s.style.display = 'none';
            var p = document.getElementById('q-step-photo');
            if (p) p.style.display = 'flex';
            var c = document.querySelector('.q-card-ia');
            if (c) c.classList.remove('is-result');
            try { if (typeof userPhoto !== 'undefined') userPhoto = null; } catch (e) {}
            try { if (typeof pixPaymentId !== 'undefined') pixPaymentId = null; } catch (e) {}
            try { if (typeof preImg !== 'undefined' && preImg) preImg.style.display = 'none'; } catch (e) {}
            try { if (typeof facePlaceholder !== 'undefined' && facePlaceholder) facePlaceholder.style.display = 'flex'; } catch (e) {}
            try { if (typeof cameraInput !== 'undefined' && cameraInput) cameraInput.value = ''; } catch (e) {}
            try { if (typeof galleryInput !== 'undefined' && galleryInput) galleryInput.value = ''; } catch (e) {}
            try { if (typeof checkFields === 'function') checkFields(); } catch (e) {}
        }

        function _plMontaBotaoNovaProva() {
            var col = document.getElementById('q-result-actions-col');
            if (!col || document.getElementById('q-btn-nova-prova')) return;
            var b = document.createElement('button');
            b.type = 'button';
            b.id = 'q-btn-nova-prova';
            b.className = 'q-btn-outline';
            b.textContent = 'Provar outra foto';
            b.style.marginTop = '10px';
            b.onclick = _plNovaProva;
            col.appendChild(b);
        }

        var _plCloseOriginal = closeModal;
        closeModal = function () {
            if (_plTemResultado()) {
                try { modal.style.display = 'none'; } catch (e) {}
                try { unlockBodyScroll(); } catch (e) {}
                try { stopFakeBuy(); } catch (e) {}
                return;
            }
            return _plCloseOriginal.apply(this, arguments);
        };

        var _plOpenOriginal = openModal;
        openModal = function () {
            var _r = _plOpenOriginal.apply(this, arguments);
            try {
                _plMontaBotaoNovaProva();
                if (_plTemResultado()) {
                    ['q-step-photo', 'q-loading-box', 'q-step-error'].forEach(function (id) {
                        var el = document.getElementById(id);
                        if (el) el.style.display = 'none';
                    });
                    var s = document.getElementById('q-step-result');
                    if (s) s.style.display = 'flex';
                    var c = document.querySelector('.q-card-ia');
                    if (c) c.classList.add('is-result');
                }
            } catch (e) {}
            return _r;
        };



        function applyProduct(product) {
            currentProduct = product;
        }


        openBtn.onclick = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            window.__plBtnSrc = 'selo';
            const prodName = document.querySelector('h1.product__title,.product-single__title,h1')?.innerText || document.title;
            applyProduct(detectProduct(prodName));
            populateImageSelector();
            openModal();
        };


        closeBtn.onclick = () => closeModal();
        if (backBtn) backBtn.onclick = () => closeModal();


        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });


        if (retryBtn) retryBtn.onclick = () => {
            document.getElementById('q-step-result').style.display = 'none';
            photoStep.style.display = 'flex';
            document.querySelector('.q-card-ia').classList.remove('is-result');
            userPhoto = null;
            pixPaymentId = null;
            preImg.style.display = 'none';
            if (facePlaceholder) facePlaceholder.style.display = 'flex';
            // limpa o value pra permitir reescolher a MESMA foto (change so dispara se mudar)
            try { cameraInput.value = ''; galleryInput.value = ''; } catch (e) {}
            checkFields();
        };

        // Camera / gallery buttons
        document.getElementById('q-btn-camera').onclick = function() { cameraInput.click(); };
        document.getElementById('q-btn-gallery').onclick = function() { galleryInput.click(); };
        document.getElementById('q-face-frame').onclick = function() { galleryInput.click(); };

        function loadRelatedProducts() {
            var grid = document.getElementById('q-related-grid');
            var section = document.getElementById('q-related-products');
            if (!grid || !section) return;

            var items = document.querySelectorAll('.js-swiper-related .js-item-product');
            if (!items.length) items = document.querySelectorAll('.js-item-product');
            var products = [];

            items.forEach(function(item) {
                if (products.length >= 3) return;
                var container = item.querySelector('[data-variants]');
                if (!container) return;
                try {
                    var variants = JSON.parse(container.getAttribute('data-variants'));
                    if (!variants || !variants.length) return;
                    var v = variants[0];
                    var imgRaw = v.image_url || '';
                    var img = imgRaw ? 'https:' + imgRaw.replace(/\\/g, '').replace('-1024-1024.webp', '-480-0.webp') : '';
                    var price = v.price_short || '';
                    // Name from img alt (Nuvemshop sets it reliably)
                    var imgEl = item.querySelector('img[alt]');
                    var name = imgEl ? imgEl.getAttribute('alt').trim() : '';
                    // Link from any anchor pointing to /produtos/
                    var linkEl = item.querySelector('a[href*="/produtos/"]');
                    var link = linkEl ? linkEl.getAttribute('href') : '';
                    if (img && (name || price)) {
                        products.push({ name: name, img: img, price: price, link: link });
                    }
                } catch(e) {}
            });

            if (!products.length) return;

            while (grid.firstChild) grid.removeChild(grid.firstChild);
            products.forEach(function(p) {
                var a = document.createElement('a');
                a.className = 'q-related-card';
                a.href = p.link || '#';
                a.target = '_blank';
                var img = document.createElement('img');
                img.src = p.img;
                img.alt = p.name;
                img.loading = 'lazy';
                var nameEl = document.createElement('span');
                nameEl.className = 'q-related-card-name';
                nameEl.textContent = p.name;
                a.appendChild(img);
                a.appendChild(nameEl);
                grid.appendChild(a);
            });
            section.style.display = 'block';
        }

        function showError() {
            var lb = document.getElementById('q-loading-box');
            var su = photoStep;
            var se = document.getElementById('q-step-error');
            if (lb) lb.style.display = 'none';
            if (su) su.style.display = 'none';
            if (se) se.style.display = 'flex';
        }
        var _eb = document.getElementById('q-error-back'); if (_eb) _eb.onclick = function() { closeModal(); };



        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            checkPhoneStep();
        });
        // ── Contador de provas restantes (debounced) ──
        let _provasDebounce;
        async function _checkProvasRestantes() {
            const _els = document.querySelectorAll('.q-provas-msg');
            if (!_els.length) return;
            const nums = phoneInput.value.replace(/\D/g, '');
            const phoneOk = isValidBRPhone(nums);
            // Phone vazio/incompleto → manda '0' pra pegar só o ip_count.
            const phone = phoneOk ? '55' + nums : '0';
            try {
                const r = await fetch(WEBHOOK_CHECK_LIMIT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone })
                });
                const d = await r.json();
                const used = Math.max(d.phone_count || 0, d.ip_count || 0, d.count || 0);
                const restantes = Math.max(0, 4 - used);
                if (restantes > 0) {
                    const _txt = restantes + (restantes === 1 ? ' prova restante hoje' : ' provas restantes hoje');
                    _els.forEach(el => { el.textContent = _txt; el.classList.remove('is-warn'); });
                } else {
                    _els.forEach(el => { el.textContent = ''; el.classList.remove('is-warn'); });   // limite: nao avisa na tela inicial; PIX so ao enviar a foto
                }
            } catch(_) { _els.forEach(el => { el.textContent = ''; el.classList.remove('is-warn'); }); }
        }
        phoneInput.addEventListener('input', () => {
            clearTimeout(_provasDebounce);
            _provasDebounce = setTimeout(_checkProvasRestantes, 600);
        });



        function flashError(targetEl, hintMsg) {
            var hint = document.getElementById('q-validation-hint');
            if (hint) {
                hint.textContent = '\u26A0\uFE0F ' + hintMsg;
                hint.classList.add('is-visible');
            }
            if (targetEl) {
                targetEl.classList.add('is-error', 'q-shake');
                setTimeout(function(){ targetEl.classList.remove('q-shake'); }, 600);
                try { targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) {}
                if (targetEl.focus) setTimeout(function(){ targetEl.focus(); }, 350);
            }
        }
        function checkPhoneStep() {
            const nums = phoneInput.value.replace(/\D/g, '');
            const phoneOk = isValidBRPhone(nums);
            document.getElementById('q-phone-error').style.display = (phoneInput.value.length > 0 && !phoneOk) ? 'block' : 'none';
            phoneInput.style.borderColor = (phoneInput.value.length > 0 && !phoneOk) ? '#ef4444' : 'var(--q-border)';
            checkFields();
        }

        function checkFields() {
            const nums = phoneInput.value.replace(/\D/g, '');
            const phoneOk = isValidBRPhone(nums);
            /* aggressive validation: botão sempre clicável */
        }

        document.getElementById('q-accept-terms').onchange = checkFields;

        // Converte QUALQUER foto (inclusive HEIF/HEIC de Samsung/iPhone) pra JPEG via canvas.
        // O backend (nó Rotate Pessoa/sharp) não lê HEIF e dropava a imagem -> "ALTA DEMANDA".
        function toJpeg(file) {
            return new Promise(function(resolve) {
                try {
                    var img = new Image();
                    var url = URL.createObjectURL(file);
                    img.onload = function() {
                        URL.revokeObjectURL(url);
                        var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
                        if (!w || !h) { resolve(file); return; }
                        var maxd = 1280, scale = Math.min(1, maxd / Math.max(w, h));
                        var cw = Math.round(w * scale), ch = Math.round(h * scale);
                        var c = document.createElement('canvas');
                        c.width = cw; c.height = ch;
                        c.getContext('2d').drawImage(img, 0, 0, cw, ch);
                        c.toBlob(function(b) { resolve(b || file); }, 'image/jpeg', 0.92);
                    };
                    img.onerror = function() { URL.revokeObjectURL(url); resolve(file); };
                    img.src = url;
                } catch (e) { resolve(file); }
            });
        }

        function handlePhotoSelected(file) {
            if (!file) return;
            toJpeg(file).then(function(jpeg) {
                userPhoto = jpeg;
                const rd = new FileReader();
                rd.onload = ev => {
                    preImg.src = ev.target.result;
                    preImg.style.display = 'block';
                    if (facePlaceholder) facePlaceholder.style.display = 'none';
                    checkFields();
                };
                rd.readAsDataURL(jpeg);
            });
        }

        cameraInput.onchange  = (e) => handlePhotoSelected(e.target.files[0]);
        galleryInput.onchange = (e) => handlePhotoSelected(e.target.files[0]);


        function resizeImage(fileOrBlob, maxSize) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    let w = img.width, h = img.height;
                    if (w <= maxSize && h <= maxSize) { resolve(fileOrBlob); return; }
                    if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; }
                    else { w = Math.round(w * maxSize / h); h = maxSize; }
                    const c = document.createElement('canvas');
                    c.width = w; c.height = h;
                    c.getContext('2d').drawImage(img, 0, 0, w, h);
                    c.toBlob(b => resolve(b), 'image/jpeg', 0.95);
                };
                const url = URL.createObjectURL(fileOrBlob instanceof Blob ? fileOrBlob : new Blob([fileOrBlob]));
                img.src = url;
            });
        }

        // ── PIX: polling e controle ──
        let pixPollingTimer = null;

        function stopPixPolling() {
            if (pixPollingTimer) { clearInterval(pixPollingTimer); pixPollingTimer = null; }
        }

        // ── Recuperacao do pagamento ──────────────────────────────────────────
        // O PIX e pago NO APP DO BANCO: a aba do provador vai pra segundo plano
        // e o celular suspende o setInterval. Antes, se o cliente nao voltasse
        // pro modal ainda aberto, a prova paga nunca aparecia. Agora reconferimos
        // sempre que ele volta pra aba ou reabre o provador.
        let pixWatchId = null;

        function pixUnlock(payment_id, phone) {
            stopPixPolling();
            pixWatchId = null;
            try { if (phone) _pixClearPending(phone); } catch (_) {}
            pixPaymentId = payment_id;
            var _msg = document.getElementById('q-pix-status-msg');
            if (_msg) {
                _msg.textContent = 'Pagamento confirmado!';
                _msg.className = 'q-pix-status q-pix-approved';
            }
            setTimeout(function () {
                hidePixScreen();
                // Se a pagina recarregou, perdemos a foto da memoria. O credito
                // continua valendo no servidor, entao pedimos a foto de novo em
                // vez de deixar a tela muda (era isso que o cliente via).
                if (!userPhoto) {
                    try {
                        photoStep.style.display = 'flex';
                        var h = document.getElementById('q-validation-hint');
                        if (h) {
                            h.textContent = '\u2705 Pagamento confirmado! Envie sua foto para gerar a prova.';
                            h.classList.add('is-visible');
                        }
                    } catch (_) {}
                    return;
                }
                runGeneration();
            }, 1200);
        }

        async function pixCheck(payment_id, phone) {
            try {
                const sr = await fetch(WEBHOOK_PIX_STATUS + '?payment_id=' + payment_id);
                const st = await sr.json();
                if (st && st.status === 'approved') { pixUnlock(payment_id, phone); return true; }
            } catch (_) {}
            return false;
        }

        async function pixResume() {
            let id = pixWatchId, ph = null;
            if (!id) {
                try {
                    const raw = localStorage.getItem(_PIX_LS_KEY);
                    const arr = raw ? JSON.parse(raw) : [];
                    const now = Date.now();
                    const p = arr.filter(function (x) { return (now - x.ts) < _PIX_TTL_MS; })[0];
                    if (p) { id = p.payment_id; ph = p.phone; }
                } catch (_) {}
            }
            if (id) await pixCheck(id, ph);
        }

        // Volta do app do banco -> reconfere na hora.
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') pixResume();
        });
        window.addEventListener('focus', function () { pixResume(); });

        function showPixScreen() {
            uploadStep.style.display = 'none';
            document.getElementById('q-step-pix').style.display = 'block';
            document.getElementById('q-pix-status-msg').textContent = 'Aguardando pagamento...';
            document.getElementById('q-pix-status-msg').className = 'q-pix-status q-pix-waiting';
        }

        function hidePixScreen() {
            stopPixPolling();
            document.getElementById('q-step-pix').style.display = 'none';
        }

        // ── Reaproveitamento de PIX pendente ──
        // Evita criar um novo QR a cada abertura do modal: se há PIX pendente do
        // mesmo telefone gerado há menos de 25min, reaproveita e continua polando.
        const _PIX_LS_KEY = 'pl_pix_pending_v1';
        const _PIX_TTL_MS = 25 * 60 * 1000; // 25 min (PIX MP expira em 30min)
        function _pixLoadPending(phone) {
            try {
                const raw = localStorage.getItem(_PIX_LS_KEY);
                if (!raw) return null;
                const arr = JSON.parse(raw);
                const now = Date.now();
                const valid = arr.filter(p => p.phone === phone && (now - p.ts) < _PIX_TTL_MS);
                return valid[0] || null;
            } catch(_) { return null; }
        }
        function _pixSavePending(phone, payment_id, qr_code, qr_code_base64) {
            try {
                const raw = localStorage.getItem(_PIX_LS_KEY);
                let arr = [];
                try { arr = raw ? JSON.parse(raw) : []; } catch(_) {}
                // Limpa expirados
                const now = Date.now();
                arr = arr.filter(p => (now - p.ts) < _PIX_TTL_MS && p.phone !== phone);
                arr.push({ phone, payment_id, qr_code, qr_code_base64, ts: now });
                localStorage.setItem(_PIX_LS_KEY, JSON.stringify(arr));
            } catch(_) {}
        }
        function _pixClearPending(phone) {
            try {
                const raw = localStorage.getItem(_PIX_LS_KEY);
                if (!raw) return;
                let arr = JSON.parse(raw);
                arr = arr.filter(p => p.phone !== phone);
                localStorage.setItem(_PIX_LS_KEY, JSON.stringify(arr));
            } catch(_) {}
        }

        async function createPixAndPoll() {
            /* PIX_DESATIVADO: prova extra via PIX removida - mostra so mensagem de volte amanha. */
            try {
                var _ph = document.getElementById('q-step-photo'); if (_ph) _ph.style.display = 'none';
                var _lb = document.getElementById('q-loading-box'); if (_lb) _lb.style.display = 'none';
                var _pix = document.getElementById('q-step-pix');
                if (_pix) { _pix.style.display = 'block'; _pix.innerHTML = '<h2>Limite de hoje atingido</h2><p class="q-pix-subtitle" style="text-align:center;">Voc&ecirc; j&aacute; usou suas provas de hoje.<br>Volte amanh&atilde; para experimentar mais &oacute;culos! &#128522;</p>'; }
            } catch (e) {}
            return;
            showPixScreen();
            const phone = '55' + phoneInput.value.replace(/\D/g, '');
            try {
                let pix;
                const pending = _pixLoadPending(phone);
                if (pending) {
                    // Reaproveita PIX pendente
                    pix = { payment_id: pending.payment_id, qr_code: pending.qr_code, qr_code_base64: pending.qr_code_base64 };
                } else {
                    const resp = await fetch(WEBHOOK_PIX, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: 'cliente@provoulevou.com.br', phone, loja: 'sirena', origin: location.origin })
                    });
                    pix = await resp.json();
                    if (!pix.payment_id || !pix.qr_code) throw new Error('PIX inválido');
                    _pixSavePending(phone, pix.payment_id, pix.qr_code, pix.qr_code_base64);
                }

                document.getElementById('q-pix-qr-img').src = 'data:image/png;base64,' + pix.qr_code_base64;
                document.getElementById('q-pix-code').value = pix.qr_code;

                // Polling a cada 3s ate o PIX expirar (30min), nao mais 5min.
                // O reforco de verdade e o pixResume() no visibilitychange.
                pixWatchId = pix.payment_id;
                let attempts = 0;
                pixPollingTimer = setInterval(function () {
                    attempts++;
                    if (attempts > 600) { stopPixPolling(); return; }
                    pixCheck(pix.payment_id, phone);
                }, 3000);
            } catch (e) {
                hidePixScreen();
                uploadStep.style.display = 'block';
                showError();
            }
        }

        // Botão copiar PIX
        document.getElementById('q-pix-copy-btn').onclick = () => {
            const code = document.getElementById('q-pix-code').value;
            navigator.clipboard.writeText(code).then(() => {
                document.getElementById('q-pix-copy-btn').textContent = 'Copiado!';
                setTimeout(() => { document.getElementById('q-pix-copy-btn').textContent = 'Copiar'; }, 2000);
            });
        };

        // Botão cancelar PIX
        document.getElementById('q-pix-cancel').onclick = () => {
            hidePixScreen();
            uploadStep.style.display = 'block';
        };

        // ── GERAÇÃO PRINCIPAL ──
        async function runGeneration() {

            if (runGeneration._busy) return;

            runGeneration._busy = true;

            try {
                const keyToUse = window.PROVOU_LEVOU_API_KEY;
                if (!keyToUse || keyToUse.includes("COLOQUE_A_CHAVE_AQUI")) {
                    showError();
                    return;
                }

                const prodImg = selectedProductImgUrl || (document.querySelector('meta[property="og:image"]')?.content || '');
                const prodName = document.querySelector('h1.product__title,.product-single__title,h1')?.innerText || document.title;

                uploadStep.style.display = 'none';
                document.getElementById('q-loading-box').style.display = 'flex';

                try {
                    // Guard: re-valida telefone antes de submeter (evita whatsapp vazio)
                    const _finalNums = (phoneInput.value || '').replace(/\D/g, '');
                    if (typeof isValidBRPhone === 'function' && !isValidBRPhone(_finalNums)) {
                        try { document.getElementById('q-loading-box').style.display = 'none'; } catch(_) {}
                        try { uploadStep.style.display = 'block'; } catch(_) {}
                        try { genBtn.disabled = false; } catch(_) {}
                        try { phoneInput.focus(); } catch(_) {}
                        return;
                    }
const fd = new FormData();
                    fd.append('person_image', userPhoto, 'person.jpg');
                    fd.append('whatsapp', '55' + phoneInput.value.replace(/\D/g, ''));
                    fd.append('phone_raw', phoneInput.value);
                    fd.append('product_name', prodName);
                    fd.append('product_url', window.location.href);
                    fd.append('product_type', currentProduct.category);
                    fd.append('product_fit', currentProduct.fit);
                    fd.append('api_key', keyToUse);
                    if (pixPaymentId) fd.append('pix_payment_id', pixPaymentId);

                    if (currentProduct.category === 'top') {
                        fd.append('height', '');
                        fd.append('weight', '');
                    } else {
                        fd.append('height', '');
                        fd.append('weight', '');
                        fd.append('cintura', '');
                        fd.append('quadril', '');
                    }

                    // Coleta até 4 fotos do produto: 1ª como binary (compat), 2ª-4ª como base64 text.
                    // 1ª = prodImg (escolhida pelo cliente ou default); demais = extractImages() exceto a 1ª.
                    let allProdImgs = [];
                    if (prodImg) allProdImgs.push(prodImg);
                    try {
                        if (typeof extractImages === 'function') {
                            const extra = extractImages();
                            for (const u of extra) {
                                const cleanU = String(u || '').split('?')[0];
                                if (!allProdImgs.some(p => String(p).split('?')[0] === cleanU)) {
                                    allProdImgs.push(u);
                                }
                            }
                        }
                    } catch (_) {}
                    allProdImgs = allProdImgs.slice(0, 4);
                    console.log('[PL Sirena] Enviando', allProdImgs.length, 'fotos do produto');
                    for (let _pi = 0; _pi < allProdImgs.length; _pi++) {
                        try {
                            const _b = await fetch(allProdImgs[_pi]).then(r => r.blob());
                            if (!_b || !/^image\//i.test(_b.type)) continue; // pula HTML/nao-imagem
                            if (_pi === 0) {
                                fd.append('product_image', _b, 'product.jpg');
                            } else {
                                const _b64 = await new Promise((resolve, reject) => {
                                    const _r = new FileReader();
                                    _r.onloadend = () => resolve(_r.result.split(',')[1]);
                                    _r.onerror = reject;
                                    _r.readAsDataURL(_b);
                                });
                                fd.append('product_image_' + (_pi+1) + '_b64', _b64);
                            }
                        } catch (_) { }
                    }

                    calculateFinalSize();

                    const res = await fetch(WEBHOOK_PROVA, { method: 'POST', body: fd });

                    const contentType = res.headers.get("content-type") || "";
                    if (contentType.includes("application/json")) {
                        const data = await res.json();
                        if (data.limited || data.error === 'limite_diario') {
                            try { document.getElementById('q-loading-box').style.display = 'none'; } catch (_) {}
                            createPixAndPoll();
                            return;
                        }
                        if (data.error) {
                            document.getElementById('q-loading-box').style.display = 'none';
                            photoStep.style.display = 'flex';
                            if (data.error === "Chave invalida, vencida ou inativa." || data.error.includes("vencida ou inativa")) {
                                showError();
                            } else {
                                alert(data.error);
                            }
                            return;
                        }
                    }

                    if (res.ok) {
                        const blob = await res.blob();
                        document.getElementById('q-loading-box').style.display = 'none';
                        document.getElementById('q-final-view-img').src = URL.createObjectURL(blob);
                        document.querySelector('.q-card-ia').classList.add('is-result');
                        plTrackProved((document.getElementById('q-phone') || document.getElementById('mc-phone') || document.querySelector('input[type=tel]') || {}).value);
                        document.getElementById('q-step-result').style.display = 'flex';
                        populateBuyCta();
                        if (typeof _checkProvasRestantes === 'function') _checkProvasRestantes();
                    } else if (res.status === 401 || res.status === 403) {
                        document.getElementById('q-loading-box').style.display = 'none';
                        photoStep.style.display = 'flex';
                        showError();
                    } else { throw new Error(); }
                } catch (e) {
                    document.getElementById('q-loading-box').style.display = 'none';
                    photoStep.style.display = 'flex';
                    showError();
                }
        

            } finally {

                runGeneration._busy = false;

            }
        }

        

        genBtn.onclick = async () => {
            // Validação agressiva (UI feedback)
            var _vNums = (phoneInput.value || '').replace(/\D/g, '');
            var _vPhoneOk = isValidBRPhone(_vNums);
            var _vFaceFrame = document.getElementById('q-face-frame');
            var _vTerms = document.getElementById('q-accept-terms');
            if (!_vPhoneOk) { flashError(phoneInput, 'Preencha seu WhatsApp para continuar'); return; }
            if (!userPhoto) { flashError(_vFaceFrame, 'Envie ou tire sua foto para continuar'); return; }
            if (_vTerms && !_vTerms.checked) { flashError(document.querySelector('.q-terms-row'), 'Aceite os termos para continuar'); return; }
            var _vHint = document.getElementById('q-validation-hint');
            if (_vHint) _vHint.classList.remove('is-visible');
            phoneInput.classList.remove('is-error');
            if (_vFaceFrame) _vFaceFrame.classList.remove('is-error');

            if (!userPhoto) return;
            const _gNums = (phoneInput.value || '').replace(/\D/g, '');
            const _gPhoneOk = (_gNums.length === 10 || _gNums.length === 11) && /^[1-9][1-9]/.test(_gNums) && (_gNums.length === 10 || _gNums[2] === '9');
            if (!_gPhoneOk) { phoneInput.focus(); return; }

            const phone = '55' + phoneInput.value.replace(/\D/g, '');
            genBtn.disabled = true;

            // Feedback imediato: mostra a animacao na hora; o check de limite roda enquanto ela ja aparece.
            try { uploadStep.style.display = 'none'; } catch (_) {}
            try { document.getElementById('q-loading-box').style.display = 'flex'; } catch (_) {}

            try {
                const resp = await fetch(WEBHOOK_CHECK_LIMIT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone })
                });
                const data = await resp.json();
                if (data.limited) {
                    // limite atingido: esconde a animacao e vai pro PIX
                    try { document.getElementById('q-loading-box').style.display = 'none'; } catch (_) {}
                    genBtn.disabled = false;
                    createPixAndPoll();
                    return;
                }
            } catch (_) {
                // se o check falhar, deixa gerar (evita bloquear por erro de rede)
            }

            genBtn.disabled = false;
            runGeneration();
        };
    }

    // ─── EXECUTA APENAS EM PÁGINAS DE PRODUTO ────────────────────────────────────
    const isProductPage = window.location.pathname.includes('/products/') || window.location.pathname.includes('/product/') || window.location.pathname.includes('/produtos/') || window.location.pathname.includes('/produto/') || window.location.pathname.includes('/p/') || window.location.pathname.includes('preview.html') || document.querySelector('meta[property="og:type"][content="product"]');

    if (isProductPage) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
        else init();
    }

})();

/* ==========================================================================
   ESCOLHER LENTES — Ótica Sirena. Regras do "Guia do aplicativo" do lojista
   (fluxograma-completo-lentes-sirena2.pdf, catálogo Nuvemshop de 18/09/2026).

   - 52 lentes (31 monofocais + 21 multifocais), todas pelo ID de PRODUTO.
     As lentes estão DESPUBLICADAS na loja, mas o POST /comprar/ aceita (testado 29/09).
   - Cada lente carrega a grade de fabricação do PDF (faixas ESF + CIL indivisíveis).
     Os DOIS olhos precisam caber no MESMO produto; não se faz média entre olhos.
   - 1.59 (Resistente/policarbonato) só aparece quando a armação é Balgriff.
   - Tabela aprovada (p. 3) só vale para monofocal NEGATIVA sem astigmatismo;
     o resto (astigmatismo, positivo, multifocal) mostra "opção compatível, sujeita à avaliação".
   - Sem receita: lente provisória (p. 16), com aceite; a receita vai depois pelo WhatsApp.
   ========================================================================== */
const LENTES = [
 {
  "id": "364561041",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Antirreflexo",
  "preco": 129.0,
  "precoDe": 150.0,
  "img": "https://acdn-us.mitiendanube.com/stores/002/439/162/products/grau-leve-ate-275-8f4f9232760598a15c17901773139034-1024-1024.png",
  "visao": "mono",
  "trat": "A",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561055",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Antirreflexo - Cil. Est.",
  "preco": 169.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561088",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Antirreflexo",
  "preco": 179.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561093",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Antirreflexo - Cil. Est.",
  "preco": 259.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561119",
  "nome": "Lentes de Grau Monofocais Fina 1.61 - Antirreflexo",
  "preco": 269.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.61",
  "familia": "Fina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561123",
  "nome": "Lentes de Grau Monofocais Fina 1.61 - Antirreflexo - Cil. Est.",
  "preco": 329.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.61",
  "familia": "Fina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561131",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Antirreflexo",
  "preco": 479.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561135",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Antirreflexo - Cil. Est.",
  "preco": 559.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "A",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": -10,
    "esfMax": -8.25,
    "cilMin": 2.25,
    "cilMax": 3
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561058",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Proteção Digital + Antirreflexo",
  "preco": 199.0,
  "precoDe": 250.0,
  "img": "https://acdn-us.mitiendanube.com/stores/002/439/162/products/grau-leve-ate-275-34c67631564953e2af17901773301831-1024-1024.png",
  "visao": "mono",
  "trat": "AB",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561063",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Proteção Digital + Antirreflexo - Cil. Est.",
  "preco": 259.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561066",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Proteção Digital + Antirreflexo - Super Cil.",
  "preco": 379.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": false,
  "superCil": true,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 4.25,
    "cilMax": 6
   }
  ]
 },
 {
  "id": "364561097",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Proteção Digital + Antirreflexo",
  "preco": 229.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561101",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Proteção Digital + Antirreflexo - Cil. Est.",
  "preco": 389.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561126",
  "nome": "Lentes de Grau Monofocais Fina 1.61 - Proteção Digital + Antirreflexo",
  "preco": 349.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.61",
  "familia": "Fina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561128",
  "nome": "Lentes de Grau Monofocais Fina 1.61 - Proteção Digital + Antirreflexo - Cil. Est.",
  "preco": 419.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.61",
  "familia": "Fina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561138",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Proteção Digital + Antirreflexo",
  "preco": 599.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561144",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Proteção Digital + Antirreflexo - Cil. Est.",
  "preco": 669.9,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": -10,
    "esfMax": -8.25,
    "cilMin": 2.25,
    "cilMax": 3
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561163",
  "nome": "Lentes de Grau Monofocais Extra Ultrafina 1.74 - Proteção Digital + Antirreflexo",
  "preco": 990.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.74",
  "familia": "Extra Ultrafina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -13,
    "esfMax": -1,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": -15,
    "esfMax": -13.25,
    "cilMin": 0,
    "cilMax": 0
   }
  ]
 },
 {
  "id": "364561167",
  "nome": "Lentes de Grau Monofocais Extra Ultrafina 1.74 - Proteção Digital + Antirreflexo - Cil. Est.",
  "preco": 1190.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AB",
  "indice": "1.74",
  "familia": "Extra Ultrafina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": -1,
    "cilMin": 2.25,
    "cilMax": 3
   }
  ]
 },
 {
  "id": "364561068",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Fotossensível + Antirreflexo",
  "preco": 279.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561072",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 349.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561107",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Fotossensível + Antirreflexo",
  "preco": 389.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561109",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 559.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561146",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Fotossensível + Antirreflexo",
  "preco": 879.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561149",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 979.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "AF",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": -10,
    "esfMax": -8.25,
    "cilMin": 2.25,
    "cilMax": 3
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561076",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Proteção Digital + Fotossensível + Antirreflexo",
  "preco": 339.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561083",
  "nome": "Lentes de Grau Monofocais Conforto 1.56 - Proteção Digital + Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 439.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.56",
  "familia": "Conforto",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561113",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Proteção Digital + Fotossensível + Antirreflexo",
  "preco": 479.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561116",
  "nome": "Lentes de Grau Monofocais Resistente 1.59 - Proteção Digital + Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 729.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.59",
  "familia": "Resistente",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -4,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": 0.25,
    "esfMax": 4,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "364561154",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Proteção Digital + Fotossensível + Antirreflexo",
  "preco": 1109.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": false,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 0,
    "cilMin": 0,
    "cilMax": 2
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 2
   }
  ]
 },
 {
  "id": "364561157",
  "nome": "Lentes de Grau Monofocais Ultrafina 1.67 - Proteção Digital + Fotossensível + Antirreflexo - Cil. Est.",
  "preco": 1239.0,
  "precoDe": null,
  "img": null,
  "visao": "mono",
  "trat": "ABF",
  "indice": "1.67",
  "familia": "Ultrafina",
  "cilEst": true,
  "superCil": false,
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 0,
    "cilMin": 2.25,
    "cilMax": 4
   },
   {
    "esfMin": -10,
    "esfMax": -8.25,
    "cilMin": 2.25,
    "cilMax": 3
   },
   {
    "esfMin": 0.25,
    "esfMax": 6,
    "cilMin": 2.25,
    "cilMax": 4
   }
  ]
 },
 {
  "id": "367577638",
  "nome": "Multifocais Go! 1.56 - Antirreflexo",
  "preco": 489.0,
  "precoDe": 959.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.56",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577641",
  "nome": "Multifocais Go! 1.56 - Proteção Digital + Antirreflexo",
  "preco": 589.0,
  "precoDe": 1359.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.56",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577646",
  "nome": "Multifocais Go! 1.59 - Antirreflexo",
  "preco": 689.0,
  "precoDe": 1599.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.59",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577648",
  "nome": "Multifocais Go! 1.59 - Proteção Digital + Antirreflexo",
  "preco": 989.0,
  "precoDe": 1999.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.59",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577650",
  "nome": "Multifocais Go! 1.67 - Antirreflexo",
  "preco": 1489.0,
  "precoDe": 2639.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.67",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577654",
  "nome": "Multifocais Go! 1.67 - Proteção Digital + Antirreflexo",
  "preco": 1639.0,
  "precoDe": 3039.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.67",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577657",
  "nome": "Multifocais Go! 1.74 - Proteção Digital + Antirreflexo",
  "preco": 1989.0,
  "precoDe": 4559.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.74",
  "linha": "Go",
  "faixas": [
   {
    "esfMin": -12,
    "esfMax": 8,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577658",
  "nome": "Multifocais Light 1.56 - Antirreflexo",
  "preco": 689.0,
  "precoDe": 1279.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.56",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577661",
  "nome": "Multifocais Light 1.56 - Proteção Digital + Antirreflexo",
  "preco": 789.0,
  "precoDe": 1679.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.56",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577664",
  "nome": "Multifocais Light 1.59 - Antirreflexo",
  "preco": 1039.0,
  "precoDe": 1919.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.59",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577665",
  "nome": "Multifocais Light 1.59 - Proteção Digital + Antirreflexo",
  "preco": 1229.0,
  "precoDe": 2319.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.59",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577672",
  "nome": "Multifocais Light 1.67 - Antirreflexo",
  "preco": 1689.0,
  "precoDe": 2959.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.67",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577675",
  "nome": "Multifocais Light 1.67 - Proteção Digital + Antirreflexo",
  "preco": 1889.0,
  "precoDe": 3359.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.67",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -10,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577678",
  "nome": "Multifocais Light 1.74 - Proteção Digital + Antirreflexo",
  "preco": 2439.0,
  "precoDe": 4879.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.74",
  "linha": "Light",
  "faixas": [
   {
    "esfMin": -12,
    "esfMax": 8,
    "cilMin": 0,
    "cilMax": 4
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577680",
  "nome": "Multifocais Smart 1.56 - Antirreflexo",
  "preco": 959.0,
  "precoDe": 1759.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.56",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 6
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577685",
  "nome": "Multifocais Smart 1.56 - Proteção Digital + Antirreflexo",
  "preco": 1129.0,
  "precoDe": 2159.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.56",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -6,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 6
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577690",
  "nome": "Multifocais Smart 1.59 - Antirreflexo",
  "preco": 1279.0,
  "precoDe": 2399.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.59",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 6
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577693",
  "nome": "Multifocais Smart 1.59 - Proteção Digital + Antirreflexo",
  "preco": 1429.0,
  "precoDe": 2799.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.59",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -8,
    "esfMax": 6,
    "cilMin": 0,
    "cilMax": 6
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577696",
  "nome": "Multifocais Smart 1.67 - Antirreflexo",
  "preco": 2089.0,
  "precoDe": 3439.0,
  "img": null,
  "visao": "multi",
  "trat": "A",
  "indice": "1.67",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -12,
    "esfMax": 9,
    "cilMin": 0,
    "cilMax": 8
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577702",
  "nome": "Multifocais Smart 1.67 - Proteção Digital + Antirreflexo",
  "preco": 2199.0,
  "precoDe": 3839.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.67",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -12,
    "esfMax": 9,
    "cilMin": 0,
    "cilMax": 8
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 },
 {
  "id": "367577706",
  "nome": "Multifocais Smart 1.74 - Proteção Digital + Antirreflexo",
  "preco": 2789.0,
  "precoDe": 5359.0,
  "img": null,
  "visao": "multi",
  "trat": "AB",
  "indice": "1.74",
  "linha": "Smart",
  "faixas": [
   {
    "esfMin": -16,
    "esfMax": 14,
    "cilMin": 0,
    "cilMax": 8
   }
  ],
  "addMin": 0.75,
  "addMax": 3.5
 }
];

const L_ = function (id) { return LENTES.filter(function (l) { return l.id === id; })[0] || null; };

/* Cilindro positivo -> transposição para cilindro negativo (a grade é em cil negativo).
   Guarda o cil em módulo. Não usa esférico equivalente. */
function normOlho(esf, cil, eixo) {
  esf = Number(esf) || 0; cil = Number(cil) || 0;
  if (cil > 0) { esf = esf + cil; cil = -cil; if (eixo != null) eixo = (Number(eixo) + 90) % 180; }
  return { esf: Math.round(esf * 100) / 100, cil: Math.round(Math.abs(cil) * 100) / 100, eixo: eixo };
}
function cabeFaixa(o, f) {
  return o.esf >= f.esfMin - 1e-9 && o.esf <= f.esfMax + 1e-9 && o.cil >= f.cilMin - 1e-9 && o.cil <= f.cilMax + 1e-9;
}
function serveOlho(l, o) { return l.faixas.some(function (f) { return cabeFaixa(o, f); }); }
function serve(l, olhos, add) {
  if (!olhos.every(function (o) { return serveOlho(l, o); })) return false;
  if (l.visao === 'multi') { if (add == null || add < l.addMin - 1e-9 || add > l.addMax + 1e-9) return false; }
  return true;
}
function permitida(l, balgriff) { return l.indice !== '1.59' || !!balgriff; }
function porPreco(a, b) { return a.preco - b.preco; }

/* Tabela aprovada (p. 3): monofocal, ESF negativo, CIL 0,00 nos dois olhos. pior = ESF mais negativo. */
function tabelaAprovada(trat, pior) {
  if (pior >= -2.75) return { A: ['364561041', 1], AB: ['364561058', 1], AF: ['364561068', 1], ABF: ['364561076', 1] }[trat];
  if (pior >= -4.75) return {
    A: ['364561119', 1], AB: ['364561126', 1],
    // sem 1.61 fotossensível: 1.67 por lacuna de índice (avaliar); 1.56 até -4,00 como econômica avaliada
    AF: ['364561146', 0, pior >= -4 ? '364561068' : null], ABF: ['364561154', 0, pior >= -4 ? '364561076' : null]
  }[trat];
  if (pior >= -6.75) return { A: ['364561131', 1], AB: ['364561138', 1], AF: ['364561146', 1], ABF: ['364561154', 1] }[trat];
  return { A: ['364561131', 0], AB: ['364561163', 1], AF: ['364561146', 0], ABF: ['364561154', 0] }[trat];
}

const SELO = {
  ideal: 'Indicada para o seu grau',
  avaliar: 'Opção compatível, sujeita à avaliação',
  econ: 'Alternativa econômica, sujeita à avaliação',
  balgriff: 'Opção para armação Balgriff: policarbonato 1.59',
  provisoria: 'Opção inicial - valor sujeito à conferência da receita'
};
function op(l, selo) { return l ? { lente: l, selo: selo } : null; }

/**
 * e = { visao: 'mono'|'multi'|'semgrau', trat: 'A'|'AB'|'AF'|'ABF', receita: {...}|null,
 *       balgriff: bool, uso: 'longe'|'perto'|null }
 * @returns {tipo, opcoes:[{lente, selo}]} | {atendimento: motivo} | {plano:true} | {tipo:'outro_trat', opcoes}
 */
function recomendarSirena(e) {
  var bal = !!e.balgriff;
  if (e.visao === 'semgrau') {
    if (bal) return { atendimento: 'balgriff_semgrau' };   // p. 15: exceção a validar -> atendimento
    return { tipo: 'semgrau', opcoes: [op(L_('364561058'), 'Lente zerada (ESF / CIL 0,00) com proteção digital')] };
  }
  // SEM RECEITA: produtos de partida (p. 16)
  if (!e.receita) {
    var ind = bal ? '1.59' : '1.56';
    if (e.visao === 'mono') {
      var base = bal ? { A: '364561088', AB: '364561097', AF: '364561107', ABF: '364561113' }
                     : { A: '364561041', AB: '364561058', AF: '364561068', ABF: '364561076' };
      return { tipo: 'provisoria', opcoes: [op(L_(base[e.trat]), SELO.provisoria)] };
    }
    var ops = ['Go', 'Light', 'Smart'].map(function (ln) {
      return op(LENTES.filter(function (l) { return l.visao === 'multi' && l.linha === ln && l.indice === ind && l.trat === e.trat; })[0], SELO.provisoria);
    }).filter(Boolean);
    return { tipo: 'provisoria', opcoes: ops };
  }

  var r = e.receita;
  var od = normOlho(r.odEsf, r.odCil, r.odEixo), oe = normOlho(r.oeEsf, r.oeCil, r.oeEixo);
  var add = r.adicao != null ? Number(r.adicao) : null;
  if (e.visao === 'mono' && e.uso === 'perto' && add) {   // monofocal de perto: ESF de perto = longe + adição
    od = { esf: od.esf + add, cil: od.cil, eixo: od.eixo }; oe = { esf: oe.esf + add, cil: oe.cil, eixo: oe.eixo };
  }
  var olhos = [od, oe];

  if (e.visao === 'multi') {
    var ops2 = ['Go', 'Light', 'Smart'].map(function (ln) {
      var c = LENTES.filter(function (l) {
        return l.visao === 'multi' && l.linha === ln && l.trat === e.trat && permitida(l, bal) && serve(l, olhos, add);
      }).sort(porPreco);
      return op(c[0], SELO.avaliar);
    }).filter(Boolean);
    if (!ops2.length) return { atendimento: 'fora_grade', olhos: olhos };
    return { tipo: 'multi', opcoes: ops2, olhos: olhos };
  }

  // MONOFOCAL
  if (olhos.every(function (o) { return o.esf === 0 && o.cil === 0; })) return { plano: true };
  var mono = LENTES.filter(function (l) { return l.visao === 'mono' && permitida(l, bal); });
  var cands = mono.filter(function (l) { return l.trat === e.trat && serve(l, olhos); }).sort(porPreco);
  if (!cands.length) {
    var outras = mono.filter(function (l) { return serve(l, olhos); }).sort(porPreco).slice(0, 4);
    if (outras.length) return { tipo: 'outro_trat', opcoes: outras.map(function (l) { return op(l, SELO.avaliar); }), olhos: olhos };
    var doTrat = mono.filter(function (l) { return l.trat === e.trat; });
    var cadaOlho = olhos.every(function (o) { return doTrat.some(function (l) { return serveOlho(l, o); }); });
    return { atendimento: cadaOlho ? 'par_misto' : 'fora_grade', olhos: olhos };
  }

  var simples = olhos.every(function (o) { return o.cil === 0 && o.esf <= 0; });
  var opcoes = [];
  if (simples) {
    var pior = Math.min(od.esf, oe.esf);
    var t = tabelaAprovada(e.trat, pior);
    var rec = t && cands.filter(function (l) { return l.id === t[0]; })[0];
    if (rec) {
      opcoes.push(op(rec, t[1] ? SELO.ideal : SELO.avaliar));
      var econ = t[2] && cands.filter(function (l) { return l.id === t[2]; })[0];
      if (econ) opcoes.push(op(econ, SELO.econ));
    }
  }
  if (!opcoes.length) {
    // astigmatismo / positivo / fora da tabela: compatíveis por preço, sem selo de ideal
    cands.filter(function (l) { return l.indice !== '1.59'; }).slice(0, 3).forEach(function (l) { opcoes.push(op(l, SELO.avaliar)); });
  }
  if (bal) {
    var p159 = cands.filter(function (l) { return l.indice === '1.59'; })[0];
    if (p159) opcoes.push(op(p159, SELO.balgriff));
  }
  if (!opcoes.length) opcoes = cands.slice(0, 3).map(function (l) { return op(l, SELO.avaliar); });
  return { tipo: simples ? 'tabela' : 'compat', opcoes: opcoes, olhos: olhos };
}

if (typeof window !== 'undefined') { window.LENTES = LENTES; window.recomendarSirena = recomendarSirena; }
if (typeof module !== 'undefined') { module.exports = { LENTES, recomendarSirena, normOlho, serve }; }


/* =====================================================================
   ESCOLHER LENTES (Sirena) — controlador. Base: controlador da Koros,
   com as regras do guia do lojista (4 entradas, tratamento antes da receita,
   receita agora ou depois pelo WhatsApp, 1.59 só Balgriff).
   Rastreia cada passo em pl-lentes-step (mesmo funil das outras lojas).
   ===================================================================== */
(function () {
    if (window.__PL_LENTES_LOADED__) return;
    window.__PL_LENTES_LOADED__ = true;

    var WHATSAPP_LOJA = '5519996618739';   // WhatsApp da Sirena (rodapé do site)
    var WEBHOOK_RECEITA = 'https://n8n.segredosdodrop.com/webhook/pl-ler-receita';
    var WEBHOOK_STEP = 'https://n8n.segredosdodrop.com/webhook/pl-lentes-step';

    var $ = function (s) { return document.querySelector(s); };
    var $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };
    var brl = function (v) { return 'R$ ' + Number(v).toFixed(2).replace('.', ','); };

    var st = { visao: null, trat: null, receita: null, uso: null, lente: null, rec: null, ultimo: 'abriu' };

    /* So armacao de GRAU tem fluxo de lente (sol, estojo e as proprias lentes nao). */
    function nomeProduto() {
        return ((document.getElementById('q-result-prodname') || {}).textContent
            || (document.querySelector('h1.js-product-name,h1.product-title,h1') || {}).innerText || document.title || '').trim();
    }
    /* Piloto: fluxo de lentes SO nestes produtos (handle da URL /produtos/<handle>/).
       Lista vazia = desligado em todos. Liberar para todos = PL_LENTES_TODOS = true. */
    var PL_LENTES_PRODUTOS = [];
    var PL_LENTES_TODOS = false;
    function liberadoAqui() {
        if (PL_LENTES_TODOS) return true;
        var m = location.pathname.match(/\/produtos\/([^/?#]+)/);
        return !!m && PL_LENTES_PRODUTOS.indexOf(decodeURIComponent(m[1]).toLowerCase()) !== -1;
    }
    function ehArmacaoDeGrau() {
        var n = (document.querySelector('h1.js-product-name,h1.product-title,h1') || {}).innerText || '';
        if (!liberadoAqui()) return false;
        return /de\s+grau/i.test(n) && !/estojo|lentes?\s+de\s+grau|clip\s*-?\s*on/i.test(n);
    }
    function ehBalgriff() { return /balgriff/i.test(nomeProduto()); }

    /* ---------- rastreamento (fire-and-forget) ---------- */
    function plSid() {
        try {
            var s = localStorage.getItem('pl_sid');
            if (!s) { s = 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); localStorage.setItem('pl_sid', s); }
            return s;
        } catch (e) { return 'nostore'; }
    }
    function track(step, detail) {
        st.ultimo = step;
        try {
            var tel = (document.getElementById('q-phone') || {}).value || '';
            fetch(WEBHOOK_STEP, {
                method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session_id: plSid(), origin: location.origin, telefone: tel,
                    step: step, produto: nomeProduto().slice(0, 180), detail: detail || {}
                })
            }).catch(function () { });
        } catch (e) { }
    }

    var TELAS = ['q-step-lentes', 'q-step-receita', 'q-step-upload', 'q-step-uso', 'q-step-lentes-tel', 'q-step-lente-final'];
    function ir(id) {
        TELAS.forEach(function (t) { var el = document.getElementById(t); if (el) el.style.display = 'none'; });
        var res = document.getElementById('q-step-result'); if (res) res.style.display = 'none';
        var alvo = document.getElementById(id);
        if (alvo) alvo.style.display = 'flex';
        var sc = $('.q-content-scroll'); if (sc) sc.scrollTop = 0;
    }
    function _vigiaProvador() {
        var foto = document.getElementById('q-step-photo');
        if (!foto) return;
        var esconde = function () {
            if (foto.style.display === 'none') return;
            TELAS.forEach(function (t) { var el = document.getElementById(t); if (el) el.style.display = 'none'; });
        };
        new MutationObserver(esconde).observe(foto, { attributes: true, attributeFilter: ['style'] });
        esconde();
    }
    function voltarResultado() {
        TELAS.forEach(function (t) { var el = document.getElementById(t); if (el) el.style.display = 'none'; });
        var res = document.getElementById('q-step-result'); if (res) res.style.display = 'flex';
    }

    /* multifocal tem so 2 tratamentos (sem fotossensivel no catalogo) */
    function pintarTratamentos() {
        $$('#q-step-receita [data-trat]').forEach(function (b) {
            b.style.display = (st.visao === 'multi' && b.getAttribute('data-so-mono')) ? 'none' : 'flex';
        });
    }

    /* ---------- selects da receita ---------- */
    function faixa(de, ate, passo) {
        var o = ['<option value="">—</option>'];
        for (var v = de; v <= ate + 0.001; v += passo) {
            var s = (v > 0 ? '+' : '') + v.toFixed(2).replace('.', ',');
            o.push('<option value="' + v.toFixed(2) + '">' + s + '</option>');
        }
        return o.join('');
    }
    function popular() {
        $$('[data-r$="Esf"]').forEach(function (s) { s.innerHTML = faixa(-16, 14, 0.25); });
        // cilindro negativo e positivo: a receita pode vir em cil positivo (transpomos no motor)
        $$('[data-r$="Cil"]').forEach(function (s) { s.innerHTML = faixa(-8, 6, 0.25); s.value = '0.00'; });
        $$('[data-r="odEixo"],[data-r="oeEixo"]').forEach(function (s) {
            var o = ['<option value="">—</option>'];
            for (var v = 0; v <= 180; v++) o.push('<option value="' + v + '">' + v + '°</option>');
            s.innerHTML = o.join('');
        });
        var ad = $('[data-r="adicao"]'); if (ad) ad.innerHTML = faixa(0.75, 3.50, 0.25);
    }
    function ajustarAdicao() {
        var tag = $('#q-adicao-tag');
        if (tag) tag.innerHTML = st.visao === 'multi' ? 'Adi&ccedil;&atilde;o &mdash; o grau de perto'
            : 'Adi&ccedil;&atilde;o &mdash; s&oacute; se estiver na receita';
    }
    function limparReceita() { $$('[data-r]').forEach(function (s) { s.value = /Cil$/.test(s.dataset.r) ? '0.00' : ''; }); }
    function avisar(msg) { var el = $('#q-aviso-campo'); el.textContent = msg; el.hidden = false; el.scrollIntoView({ block: 'nearest' }); }

    /* Campo ausente: nao inventa. Esferico dos dois olhos e obrigatorio; eixo e obrigatorio com cilindro. */
    function lerCampos() {
        var g = function (k) { var el = $('[data-r="' + k + '"]'); return el && el.value !== '' ? Number(el.value) : null; };
        var r = { odEsf: g('odEsf'), odCil: g('odCil') || 0, odEixo: g('odEixo'), oeEsf: g('oeEsf'), oeCil: g('oeCil') || 0, oeEixo: g('oeEixo'), adicao: g('adicao') };
        if (r.odEsf === null || r.oeEsf === null) return { falta: 'esferico' };
        if ((r.odCil && r.odEixo === null) || (r.oeCil && r.oeEixo === null)) return { falta: 'eixo' };
        if (st.visao === 'multi' && r.adicao === null) return { falta: 'adicao' };
        return { receita: r };
    }

    var TRAT_LABEL = { A: 'Antirreflexo', AB: 'Antirreflexo + luz azul', AF: 'Antirreflexo + fotossensível', ABF: 'Antirreflexo + fotossensível + luz azul' };
    var VISAO_LABEL = { mono: 'Monofocal', multi: 'Multifocal', semgrau: 'Sem grau' };
    var MOTIVO = {
        fora_grade: 'Seu grau está fora da grade que fabricamos pronta no site.',
        par_misto: 'Cada olho precisa de um tipo diferente de lente — a nossa ótica monta esse par pra você.',
        balgriff_semgrau: 'Para a armação Balgriff sem grau, a nossa ótica confirma a montagem com você.'
    };

    function sinal(v) { return (v > 0 ? '+' : '') + Number(v).toFixed(2).replace('.', ','); }
    function resumoDoGrau() {
        var r = st.receita; if (!r) return '';
        var olho = function (esf, cil, eixo) { return sinal(esf) + (Number(cil) ? ' ' + sinal(cil) + (eixo != null ? ' ' + eixo + '&deg;' : '') : ''); };
        return '<div class="q-grau-anotado"><b>sua receita</b>' +
            '<span>OD ' + olho(r.odEsf, r.odCil, r.odEixo) + '</span>' +
            '<span>OE ' + olho(r.oeEsf, r.oeCil, r.oeEixo) + '</span>' +
            (r.adicao != null ? '<span>Adição ' + sinal(r.adicao) + '</span>' : '') +
            (st.uso ? '<span>Uso: ' + st.uso + '</span>' : '') + '</div>';
    }

    function textoLente(l) {
        return l.visao === 'multi'
            ? 'Multifocal ' + l.linha + ({ Go: ' · entrada', Light: ' · intermediária', Smart: ' · avançada' })[l.linha] + ' · índice ' + l.indice
            : l.familia + ' ' + l.indice + (l.superCil ? ' · Super Cil.' : l.cilEst ? ' · Cil. Est.' : '');
    }

    function pintarCard(o) {
        var l = o.lente;
        $('#q-card-lente').innerHTML =
            '<div class="q-card-lente-status">' + o.selo + '</div>' +
            (l.img ? '<img class="q-lente-foto" src="' + l.img + '" alt="" decoding="async">' : '') +
            '<div class="q-card-lente-nome">' + l.nome + '</div>' +
            '<div class="q-card-lente-mat">' + textoLente(l) + '</div>' +
            '<div class="q-card-lente-preco">' + (l.precoDe ? '<s class="q-preco-de">' + brl(l.precoDe) + '</s> ' : '') + brl(l.preco) + '</div>' +
            '<div class="q-card-lente-parc">ou 6x de ' + brl(l.preco / 6) + ' sem juros</div>' +
            '<div class="q-disclaimer">A nossa ótica <strong>confere a receita</strong> antes de liberar a produção.</div>';
    }

    function selecionar(o, idx) {
        st.lente = o.lente;
        pintarCard(o);
        $$('.q-opt-lente').forEach(function (el) {
            var on = Number(el.getAttribute('data-idx')) === idx;
            el.classList.toggle('is-selected', on); el.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        atualizarBotao();
    }

    function atualizarBotao() {
        var add = $('#q-add-lente'); if (!add) return;
        var prov = st.rec && st.rec.tipo === 'provisoria';
        add.disabled = !st.lente || (prov && !$('#q-aceite').checked);
    }

    function mensagemWa(motivo) {
        var r = st.receita;
        var p = ['Olá! Estou vendo a armação ' + nomeProduto() + ' no site.'];
        if (motivo === 'receita') p.push('Escolhi a lente ' + (st.lente ? st.lente.nome : '') + ' e vou enviar minha receita por aqui.');
        else p.push('Quero ajuda para escolher a lente (' + (VISAO_LABEL[st.visao] || '') + (st.trat ? ', ' + TRAT_LABEL[st.trat] : '') + ').');
        if (r) p.push('Receita: OD ' + sinal(r.odEsf) + ' ' + sinal(r.odCil) + (r.odEixo != null ? ' ' + r.odEixo + '°' : '') +
            ' / OE ' + sinal(r.oeEsf) + ' ' + sinal(r.oeCil) + (r.oeEixo != null ? ' ' + r.oeEixo + '°' : '') +
            (r.adicao != null ? ' / Adição ' + sinal(r.adicao) : ''));
        return 'https://wa.me/' + WHATSAPP_LOJA + '?text=' + encodeURIComponent(p.join('\n'));
    }

    function mostrarResultado(rec) {
        st.rec = rec; st.lente = null;
        var add = $('#q-add-lente'), so = $('#q-so-armacao'), wa = $('#q-wa-receita'), alt = $('#q-alternativas');
        var aceite = $('#q-aceite-box'); $('#q-aceite').checked = false; aceite.hidden = true;
        wa.hidden = true; alt.innerHTML = ''; so.style.display = 'flex';
        add.style.display = 'flex'; add.disabled = false;

        if (rec.plano) {
            $('#q-card-lente').innerHTML = '<div class="q-card-lente-nome">Seus dois olhos estão sem grau</div>' +
                '<div class="q-card-lente-mat">Para esses óculos, o caminho certo é a lente sem grau com filtro de luz azul.</div>';
            $('#q-resumo-lente').textContent = '';
            add.textContent = 'VER LENTE SEM GRAU'; add.setAttribute('data-acao', 'semgrau');
            track('recomendou', { plano: true, grau: st.receita });
        } else if (rec.atendimento) {
            $('#q-card-lente').innerHTML = '<div class="q-card-lente-nome">Vamos montar sua lente com você</div>' +
                '<div class="q-card-lente-mat">' + (MOTIVO[rec.atendimento] || MOTIVO.fora_grade) + '</div>' +
                '<div class="q-card-lente-pq"><b>o que acontece agora</b>Fale com a nossa ótica no WhatsApp — ' +
                '<strong>já mandamos sua escolha junto</strong> — ou leve só a armação.</div>' + resumoDoGrau();
            $('#q-resumo-lente').textContent = '';
            add.textContent = 'FALAR COM A ÓTICA NO WHATSAPP'; add.setAttribute('data-acao', 'whatsapp');
            track('recomendou', { atendimento: rec.atendimento, visao: st.visao, trat: st.trat, grau: st.receita || null, balgriff: ehBalgriff() });
        } else {
            add.removeAttribute('data-acao');
            add.textContent = 'COMPRAR ARMAÇÃO + LENTE';
            var titulo = rec.tipo === 'outro_trat'
                ? 'O tratamento escolhido não atende o seu grau. Estas opções atendem com outro tratamento — escolha uma:'
                : rec.tipo === 'multi' ? 'Escolha o nível da sua multifocal'
                : rec.opcoes.length > 1 ? 'Opções para você' : '';
            alt.innerHTML = rec.opcoes.length > 1 || rec.tipo === 'outro_trat'
                ? (titulo ? '<div class="q-alt-titulo">' + titulo + '</div>' : '') + rec.opcoes.map(function (o, i) {
                    var l = o.lente;
                    return '<button type="button" class="q-opt q-opt-lente" data-idx="' + i + '" aria-pressed="false">'
                        + (l.img ? '<img class="q-opt-foto" src="' + l.img + '" alt="" loading="lazy">' : '')
                        + '<span class="q-opt-txt"><span class="q-opt-t">' + textoLente(l) + ' &middot; ' + TRAT_LABEL[l.trat] + '</span>'
                        + '<span class="q-opt-s">' + brl(l.preco) + ' &middot; ' + o.selo + '</span></span>'
                        + '<span class="q-opt-selected">Selecionada</span></button>';
                  }).join('')
                : '';
            if (rec.tipo === 'outro_trat') {
                // precisa do aceite da troca: nada pre-selecionado
                $('#q-card-lente').innerHTML = '<div class="q-card-lente-nome">Troca de tratamento</div>' +
                    '<div class="q-card-lente-mat">Você escolheu ' + TRAT_LABEL[st.trat] + '. Selecione abaixo a opção que prefere.</div>';
                add.disabled = true;
            } else {
                selecionar(rec.opcoes[0], 0);
            }
            if (rec.tipo === 'provisoria') {
                aceite.hidden = false; wa.hidden = false;
                atualizarBotao();
            }
            $('#q-resumo-lente').innerHTML = 'Você escolheu: ' + VISAO_LABEL[st.visao] +
                (st.trat && st.visao !== 'semgrau' ? ' &middot; ' + TRAT_LABEL[st.trat] : '') +
                (rec.tipo === 'provisoria' ? ' &middot; <strong>receita pendente</strong>' : '');
            track('recomendou', {
                tipo: rec.tipo, opcoes: rec.opcoes.map(function (o) { return o.lente.id; }),
                lente: st.lente ? st.lente.nome : null, preco: st.lente ? st.lente.preco : null,
                visao: st.visao, trat: st.trat, uso: st.uso, grau: st.receita || null, balgriff: ehBalgriff()
            });
        }
        $('#q-form-receita').hidden = true;
        $('#q-resultado-lente').hidden = false;
        $('#q-lente-titulo').textContent = rec.tipo === 'provisoria' ? 'Sua lente (provisória)' : 'Sua lente';
        ir('q-step-lente-final');
    }

    function recomendarAgora() {
        mostrarResultado(window.recomendarSirena({ visao: st.visao, trat: st.trat, receita: st.receita, balgriff: ehBalgriff(), uso: st.uso }));
    }

    /* Receita lida/digitada: monofocal com adicao -> pergunta o uso (nunca infere pelo sinal) */
    function seguirComReceita(r) {
        st.receita = r; st.uso = null;
        if (st.visao === 'mono' && r.adicao) { track('pergunta_uso', {}); ir('q-step-uso'); return; }
        recomendarAgora();
    }

    /* ---------- WhatsApp: primeira etapa do fluxo ---------- */
    var _telPendente = null;
    function telAtual() {
        var v = (document.getElementById('q-phone') || {}).value || '';
        var d = v.replace(/[^0-9]/g, '');
        if (d.length >= 10) return d;
        try {
            var g = localStorage.getItem('pl_last_phone') || '';
            if (g.replace(/[^0-9]/g, '').length >= 10) return g.replace(/[^0-9]/g, '');
        } catch (e) { }
        return '';
    }
    function telValido(d) {
        if (!/^\d{10,11}$/.test(d)) return 'Informe DDD + número';
        if (!/^[1-9][1-9]/.test(d)) return 'DDD inválido';
        if (d.length === 11 && d[2] !== '9') return 'Celular deve começar com 9 após o DDD';
        if (/^(\d)\1+$/.test(d.length === 11 ? d.slice(3) : d.slice(2))) return 'Número não parece real';
        return null;
    }
    function telMascara(d) {
        d = d.slice(0, 11);
        if (d.length <= 2) return d.length ? '(' + d : '';
        var meio = d.length === 11 ? 7 : 6;
        return '(' + d.slice(0, 2) + ') ' + d.slice(2, meio) + (d.length > meio ? '-' + d.slice(meio) : '');
    }
    function telGuarda(d) {
        var inp = document.getElementById('q-phone');
        if (inp && !inp.value.replace(/[^0-9]/g, '')) inp.value = telMascara(d);
        try { localStorage.setItem('pl_last_phone', d); } catch (e) { }
    }
    function pedeTelefone(depois) {
        if (telAtual()) { depois(); return; }
        _telPendente = depois;
        var inp = document.getElementById('q-lentes-tel');
        var err = document.getElementById('q-lentes-tel-erro');
        if (err) err.style.display = 'none';
        if (inp) inp.value = '';
        track('pediu_telefone', {});
        ir('q-step-lentes-tel');
        if (inp) setTimeout(function () { try { inp.focus(); } catch (e) { } }, 250);
    }
    function wireTelefone() {
        var inp = document.getElementById('q-lentes-tel');
        var err = document.getElementById('q-lentes-tel-erro');
        var ok = document.getElementById('q-lentes-tel-ok');
        if (!inp || !ok) return;
        inp.addEventListener('input', function () {
            inp.value = telMascara(inp.value.replace(/[^0-9]/g, ''));
            if (err) err.style.display = 'none';
        });
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); ok.click(); } });
        ok.addEventListener('click', function (e) {
            e.preventDefault();
            var d = inp.value.replace(/[^0-9]/g, '');
            var msg = telValido(d);
            if (msg) { if (err) { err.textContent = msg; err.style.display = 'block'; } return; }
            telGuarda(d);
            track('telefone', { origem: 'fluxo_lentes' });
            var f = _telPendente; _telPendente = null; if (f) f();
        });
    }

    function abrirFormReceita(titulo, banner) {
        $('#q-form-receita').hidden = false;
        $('#q-aviso-campo').hidden = true;
        ajustarAdicao();
        $('#q-resultado-lente').hidden = true;
        $('#q-lente-titulo').textContent = titulo;
        var b = $('#q-banner-ia');
        if (banner) { b.hidden = false; b.innerHTML = banner; } else { b.hidden = true; }
        ir('q-step-lente-final');
    }

    /* ---------- carrinho ---------- */
    function getProductForm() {
        var f = document.querySelector('form[action*="carrinho"], form[action*="comprar"], form.js-product-form, form[data-store="product-form"]');
        if (f && f.querySelector('input[name="add_to_cart"]')) return f;
        var inp = document.querySelector('input[name="add_to_cart"]');
        return inp ? inp.closest('form') : null;
    }
    function comprarArmacao() {
        var src = getProductForm();
        if (src) {
            var clone = document.createElement('form');
            clone.method = 'post';
            clone.action = src.getAttribute('action') || '/comprar/';
            clone.style.display = 'none';
            src.querySelectorAll('input, select, textarea').forEach(function (el) {
                if (!el.name) return;
                if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
                var h = document.createElement('input');
                h.type = 'hidden'; h.name = el.name; h.value = el.value;
                clone.appendChild(h);
            });
            if (!clone.querySelector('[name="quantity"]')) {
                var q = document.createElement('input'); q.type = 'hidden'; q.name = 'quantity'; q.value = '1'; clone.appendChild(q);
            }
            document.body.appendChild(clone); clone.submit(); return true;
        }
        var sb = document.querySelector('.js-addtocart, .btn-add-to-cart, [data-component="product.add-to-cart"]');
        if (sb) { try { sb.click(); return true; } catch (e) { } }
        return false;
    }
    /* add_to_cart usa o PRODUCT id (lente despublicada entra — testado 29/09/2026). */
    function comprarComLente(lente) {
        fetch('/comprar/', {
            method: 'POST', credentials: 'same-origin',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'add_to_cart=' + encodeURIComponent(lente.id) + '&quantity=1'
        }).then(function () { comprarArmacao(); }).catch(function () { comprarArmacao(); });
    }
    var _comprando = false;
    function travarCompra(btn, texto) {
        if (_comprando) return false;
        _comprando = true;
        ['#q-add-lente', '#q-so-armacao'].forEach(function (sel) { var b = $(sel); if (b) b.disabled = true; });
        if (btn) btn.innerHTML = '<span class="q-add-spin"></span>' + (texto || 'Adicionando…');
        setTimeout(function () {
            if (!_comprando) return;
            _comprando = false;
            ['#q-add-lente', '#q-so-armacao'].forEach(function (sel) { var b = $(sel); if (b) b.disabled = false; });
            if (btn) btn.textContent = 'Tentar de novo';
        }, 12000);
        return true;
    }
    function marcarCliqueCarrinho(comLente) {
        try {
            fetch('https://n8n.segredosdodrop.com/webhook/pl-provador-buy-click', {
                method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phone: (document.getElementById('q-phone') || {}).value || '', origin: location.origin, produto: nomeProduto(),
                    fonte: 'fluxo_lentes', com_lente: !!comLente,
                    lente: comLente && st.lente ? st.lente.nome : null,
                    lente_preco: comLente && st.lente ? st.lente.preco : null
                })
            }).catch(function () {});
        } catch (e) {}
    }

    /* ---------- cliques ---------- */
    document.addEventListener('click', function (e) {
        var t = e.target.closest('[data-ir],[data-visao],[data-trat],[data-receita],[data-uso],[data-carrinho],' +
            '.q-opt-lente,#q-btn-escolher-lentes,#q-abrir-arquivo,#q-ver-lente,#q-add-lente,#q-wa-receita');
        if (!t) return;

        if (t.id === 'q-btn-escolher-lentes') { e.preventDefault(); track('abriu', { origem: 'provador' }); pedeTelefone(function () { ir('q-step-lentes'); }); return; }
        if (t.dataset.ir) { e.preventDefault(); if (t.dataset.ir === 'q-step-result') voltarResultado(); else ir(t.dataset.ir); return; }

        if (t.dataset.visao) {
            e.preventDefault(); st.visao = t.dataset.visao; st.receita = null; st.uso = null;
            track('visao', { visao: st.visao, balgriff: ehBalgriff() });
            if (st.visao === 'semgrau') { st.trat = 'AB'; recomendarAgora(); }
            else { pintarTratamentos(); ir('q-step-receita'); }
            return;
        }
        if (t.dataset.trat) { e.preventDefault(); st.trat = t.dataset.trat; track('tratamento', { visao: st.visao, trat: st.trat }); ir('q-step-upload'); return; }

        if (t.id === 'q-abrir-arquivo') { e.preventDefault(); track('receita_metodo', { metodo: 'enviar' }); $('#q-arquivo').click(); return; }
        if (t.dataset.receita === 'digitar') { e.preventDefault(); track('receita_metodo', { metodo: 'digitar' }); limparReceita(); abrirFormReceita('Digite sua receita', null); return; }
        if (t.dataset.receita === 'depois') {
            e.preventDefault(); st.receita = null; st.uso = null;
            track('receita_metodo', { metodo: 'whatsapp_depois' });
            recomendarAgora(); return;
        }
        if (t.dataset.uso) { e.preventDefault(); st.uso = t.dataset.uso; track('uso', { uso: st.uso }); recomendarAgora(); return; }

        if (t.id === 'q-ver-lente') {
            e.preventDefault();
            var r = lerCampos();
            if (r.falta === 'esferico') { avisar('Preencha o esférico dos dois olhos.'); return; }
            if (r.falta === 'eixo') { avisar('Com cilíndrico, o eixo também é obrigatório.'); return; }
            if (r.falta === 'adicao') { avisar('Preencha a adição — ela é o grau de perto da multifocal.'); return; }
            seguirComReceita(r.receita); return;
        }

        if (t.dataset.carrinho === 'sem') {
            e.preventDefault();
            if (!travarCompra(t.id === 'q-so-armacao' ? t : null, 'Adicionando…')) return;
            marcarCliqueCarrinho(false);
            track('so_armacao', { visao: st.visao }); comprarArmacao(); return;
        }

        if (t.classList && t.classList.contains('q-opt-lente')) {
            e.preventDefault();
            var i = Number(t.getAttribute('data-idx'));
            var o = st.rec && st.rec.opcoes && st.rec.opcoes[i];
            if (o) { selecionar(o, i); track('trocou_lente', { lente: o.lente.nome, preco: o.lente.preco }); }
            return;
        }

        if (t.id === 'q-wa-receita') {
            e.preventDefault(); track('wa_receita', { lente: st.lente ? st.lente.id : null });
            window.open(mensagemWa('receita'), '_blank'); return;
        }

        if (t.id === 'q-add-lente') {
            e.preventDefault();
            var acao = t.getAttribute('data-acao');
            if (acao === 'semgrau') { st.visao = 'semgrau'; st.trat = 'AB'; st.receita = null; recomendarAgora(); return; }
            if (acao === 'whatsapp') { track('atendimento_whatsapp', { motivo: st.rec && st.rec.atendimento }); window.open(mensagemWa('ajuda'), '_blank'); return; }
            if (!st.lente || t.disabled) return;
            var prov = st.rec && st.rec.tipo === 'provisoria';
            if (prov && !$('#q-aceite').checked) return;
            if (!travarCompra(t, 'Adicionando…')) return;
            marcarCliqueCarrinho(true);
            track('carrinho', {
                lente: st.lente.nome, lente_id: st.lente.id, preco: st.lente.preco, fase: 'armacao_mais_lente',
                provisoria: !!prov, aceite: prov ? true : null, receita_pendente: !!prov,
                grau: st.receita || null, uso: st.uso, visao: st.visao, trat: st.trat, balgriff: ehBalgriff()
            });
            comprarComLente(st.lente);
            return;
        }
    });
    document.addEventListener('change', function (e) {
        if (e.target && e.target.id === 'q-aceite') { track('aceite_provisoria', { ok: e.target.checked }); atualizarBotao(); }
    });

    /* ---------- leitura REAL da receita (n8n -> Gemini vision) ---------- */
    function encaixar(sel, valor) {
        if (!sel || valor == null) return;
        var opts = [].slice.call(sel.options).map(function (o) { return o.value; }).filter(function (v) { return v !== ''; });
        var melhor = opts[0], dif = Infinity;
        opts.forEach(function (o) { var d = Math.abs(Number(o) - Number(valor)); if (d < dif) { dif = d; melhor = o; } });
        sel.value = melhor;
    }
    function wireArquivo() {
        var inp = $('#q-arquivo'); if (!inp) return;
        inp.addEventListener('change', function (e) { var f = e.target.files && e.target.files[0]; if (f) lerReceitaDoArquivo(f); inp.value = ''; });
    }
    function lerReceitaDoArquivo(file) {
        $('#q-erro-leitura').hidden = true;
        $('#q-lendo').hidden = false;
        $('#q-arq-nome').textContent = file.name;
        var th = $('#q-thumb');
        if (/^image\//.test(file.type)) { th.src = URL.createObjectURL(file); th.hidden = false; th.onload = function () { URL.revokeObjectURL(th.src); }; }
        else { th.hidden = true; }
        var ext = (String(file.type || '').split('/')[1] || 'jpg').replace(/[^a-z0-9]/gi, '').slice(0, 5) || 'jpg';
        var caminho = plSid() + '/' + Date.now() + '.' + ext;
        var fr = new FileReader();
        fr.onload = function () {
            var b64 = String(fr.result).split(',')[1];
            fetch(WEBHOOK_RECEITA, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ image: b64, mime: file.type || 'image/png', path: caminho }) })
                .then(function (resp) { return resp.json(); })
                .then(function (r) {
                    if (!r.ok) { track('receita_lida', { ok: false, erro: r.erro }); falhaLeitura(r.erro === 'nao_e_receita' ? 'Não identifiquei uma receita nessa imagem.' : 'Não consegui ler sua receita.'); return; }
                    var d = r.dados;
                    limparReceita();
                    encaixar($('[data-r="odEsf"]'), d.odEsf); encaixar($('[data-r="oeEsf"]'), d.oeEsf);
                    encaixar($('[data-r="odCil"]'), d.odCil); encaixar($('[data-r="oeCil"]'), d.oeCil);
                    if (d.adicao != null) encaixar($('[data-r="adicao"]'), d.adicao);
                    if (d.odEixo != null) $('[data-r="odEixo"]').value = String(Math.round(d.odEixo));
                    if (d.oeEixo != null) $('[data-r="oeEixo"]').value = String(Math.round(d.oeEixo));
                    $('#q-lendo').hidden = true;
                    track('receita_lida', { ok: true, confianca: d.confianca, arq: caminho });
                    // a cliente sempre confere a transcricao antes de seguir
                    abrirFormReceita('Confira sua receita', d.confianca === 'baixa'
                        ? '&#9888;&#65039; A imagem ficou difícil de ler. <strong>Confira cada número com atenção.</strong>'
                        : '&#10024; Preenchemos com o que lemos na sua receita. <strong>Confira e corrija se precisar.</strong>');
                })
                .catch(function () { track('receita_lida', { ok: false, erro: 'conexao' }); falhaLeitura('A leitura falhou — pode ser a conexão.'); });
        };
        fr.onerror = function () { falhaLeitura('Não consegui abrir o arquivo.'); };
        fr.readAsDataURL(file);
    }
    function falhaLeitura(msg) {
        $('#q-lendo').hidden = true;
        var box = $('#q-erro-leitura');
        box.innerHTML = msg + ' Tente outra foto ou <a data-receita="digitar">digite os dados</a>.';
        box.hidden = false;
    }

    /* ---------- botao na tela de resultado do provador ---------- */
    function revelarBotao() {
        var buy = document.getElementById('q-btn-buy-now');
        var lentes = document.getElementById('q-btn-escolher-lentes');
        if (!buy || !lentes) return;
        var visivel = buy.style.display && buy.style.display !== 'none';
        lentes.style.display = visivel && ehArmacaoDeGrau() ? 'flex' : 'none';
    }

    /* ---------- botao "ESCOLHER LENTES E COMPRAR" na pagina do produto ---------- */
    function abrirFluxoDoProduto(e) {
        if (e) e.preventDefault();
        var modal = document.getElementById('q-modal-ia'); if (modal) modal.style.display = 'flex';
        try { document.body.style.overflow = 'hidden'; } catch (_) { }
        ['q-step-photo', 'q-step-pix', 'q-step-error'].forEach(function (id) { var el = document.getElementById(id); if (el) el.style.display = 'none'; });
        st.ultimo = 'abriu';
        track('abriu', { origem: 'botao_produto' });
        pedeTelefone(function () { ir('q-step-lentes'); });
    }
    function _botaoLentes() {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'q-btn-lentes-produto';
        b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" '
            + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            + '<circle cx="6" cy="14" r="3.4"/><circle cx="18" cy="14" r="3.4"/>'
            + '<path d="M9.4 14c.6-1 1.5-1.5 2.6-1.5s2 .5 2.6 1.5"/>'
            + '<path d="M2.6 14V11.6c0-.7.4-1.3 1-1.6"/><path d="M21.4 14V11.6c0-.7-.4-1.3-1-1.6"/>'
            + '</svg><span>ESCOLHER LENTES E COMPRAR</span>';
        b.addEventListener('click', abrirFluxoDoProduto);
        return b;
    }
    function inserirBotaoProduto() {
        if (!ehArmacaoDeGrau()) return true;   // sol/estojo: sem botao (e para de tentar)
        var linhas = [];
        var real = document.querySelector('#product_form [data-component="product.add-to-cart"], #product_form .js-addtocart:not(.js-scroll-to-form)');
        var fixo = document.querySelector('.js-addtocart.js-scroll-to-form, .js-scroll-to-form.btn-add-to-cart');
        [real, fixo].forEach(function (btn) {
            if (!btn) return;
            var linha = (btn.closest && btn.closest('.form-row')) || btn;
            if (linha && linha.parentNode && linhas.indexOf(linha) === -1) linhas.push(linha);
        });
        if (!linhas.length) return false;
        var linhaFixa = fixo ? ((fixo.closest && fixo.closest('.form-row')) || fixo) : null;
        linhas.forEach(function (linha) {
            if (!linha.getAttribute('data-pl-lentes')) {
                linha.setAttribute('data-pl-lentes', '1');
                var b = _botaoLentes();
                if (linha === linhaFixa) b.classList.add('q-btn-lentes-compacto');
                linha.parentNode.insertBefore(b, linha);
            }
            _igualaAltura(linha);
        });
        if (linhaFixa) {
            var pv = linhaFixa.parentNode.querySelector('.q-btn-inline-provador:not(.q-btn-inline-provador-real)');
            if (pv) pv.classList.add('q-btn-provador-compacto');
        }
        return true;
    }
    function _igualaAltura(linha) {
        try {
            var lentes = linha.previousElementSibling;
            if (!lentes || !lentes.classList.contains('q-btn-lentes-produto')) return;
            if (lentes.classList.contains('q-btn-lentes-compacto')) return;
            var alvo = linha.querySelector('.js-addtocart, .btn-add-to-cart, [data-component="product.add-to-cart"]') || linha;
            var h = Math.round(alvo.getBoundingClientRect().height);
            if (h > 20) { lentes.style.height = h + 'px'; lentes.style.padding = '0 16px'; }
        } catch (e) {}
    }

    function init() {
        popular();
        wireArquivo();
        wireTelefone();
        if (!inserirBotaoProduto()) {
            var t = 0, iv = setInterval(function () { if (inserirBotaoProduto() || ++t > 20) clearInterval(iv); }, 300);
        }
        [600, 1800, 4000].forEach(function (ms) { setTimeout(inserirBotaoProduto, ms); });
        _vigiaProvador();
        var buy = document.getElementById('q-btn-buy-now');
        if (buy) {
            new MutationObserver(revelarBotao).observe(buy, { attributes: true, attributeFilter: ['style'] });
            revelarBotao();
        }
        var close = document.getElementById('q-close-btn');
        if (close) close.addEventListener('click', function () {
            if (st.ultimo && st.ultimo !== 'abriu' && st.ultimo !== 'carrinho' && st.ultimo !== 'so_armacao')
                track('saiu', { ultimo_step: st.ultimo });
        });
    }
    var _tentativas = 0;
    function bootstrap() {
        if (document.getElementById('q-btn-escolher-lentes') && document.getElementById('q-arquivo')) { init(); return; }
        if (_tentativas++ > 60) return;
        setTimeout(bootstrap, 150);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootstrap);
    else bootstrap();
})();
