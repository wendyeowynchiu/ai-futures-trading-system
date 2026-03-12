export default function TaiwanFuturesSystemWebpage() {
  const pdfUrl = "/AI_Taiwan_Index_Futures_System_Architecture_v1.pdf";

  const modules = [
    {
      title: "News Service",
      desc: "抓取 Reuters、Bloomberg、CNBC RSS，做分類、情緒分析、政策事件辨識與摘要。",
    },
    {
      title: "Market Service",
      desc: "抓取 Nasdaq、S&P 500、SOX、NVIDIA、TSM ADR、VIX、USD/JPY、日經等核心市場資料。",
    },
    {
      title: "Broker Service",
      desc: "串接永豐金 / Shioaji，提供持倉、損益、保證金與未來下單能力。",
    },
    {
      title: "Scoring Engine",
      desc: "以 v5 九大因子計算 final score，輸出偏多 / 偏空 / 觀望訊號。",
    },
    {
      title: "Rule Engine",
      desc: "管理進場、停損、停利、風控、禁單條件與規則狀態。",
    },
    {
      title: "AI Insight Engine",
      desc: "整合新聞、市場、分數與規則，輸出 AI 解釋、理由、風險提醒與建議。",
    },
  ];

  const apiRows = [
    ["/api/news", "取得新聞與情緒分析"],
    ["/api/market", "取得市場行情"],
    ["/api/scores", "取得 v5 分數模型結果"],
    ["/api/signals", "取得交易訊號與歷史紀錄"],
    ["/api/positions", "取得帳戶持倉"],
    ["/api/ai-analysis", "取得 AI 分析與建議"],
    ["/api/rules", "取得規則引擎狀態與設定"],
  ];

  const uiBlocks = [
    "System Signal Banner",
    "AI Analysis Panel",
    "Model Scores Panel",
    "Market Watch",
    "Key News",
    "Position Summary",
    "Rule Engine Status",
    "Signal History",
    "Risk Warning Panel",
    "PDF Download CTA",
  ];

  const scoreFactors = [
    "Global Risk",
    "Semiconductor",
    "TSM ADR",
    "Policy / Tariff",
    "Asia Sentiment",
    "Currency",
    "Price Structure",
    "Session / Liquidity",
    "Institutional Flow",
  ];

  const steps = [
    {
      no: "01",
      title: "Market / News Data Ingestion",
      desc: "後端定時抓市場、新聞與券商帳戶資料，整理成統一格式。",
    },
    {
      no: "02",
      title: "Scoring Engine",
      desc: "計算 v5 模型分數與 final score，產出偏多、偏空或觀望訊號。",
    },
    {
      no: "03",
      title: "Rule & Filter Layer",
      desc: "檢查規則是否成立，判斷禁單、風控與風險旗標。",
    },
    {
      no: "04",
      title: "AI Insight Layer",
      desc: "LLM 依照新聞、市場、分數、規則與持倉生成 AI 結論與建議。",
    },
    {
      no: "05",
      title: "Frontend Dashboard",
      desc: "前端顯示分數、訊號、AI 分析、規則狀態與 PDF 下載入口。",
    },
  ];

  const card =
    "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.28)]";
  const sectionTitle =
    "text-2xl md:text-3xl font-semibold tracking-tight text-white";
  const sectionText =
    "mt-4 text-sm md:text-base leading-7 text-slate-300";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                AI Taiwan Index Futures System
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                台指期 AI 交易輔助系統
                <span className="block text-slate-300">Architecture · Core Modules · Prompt · API · UI</span>
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                這是一個面向產品設計、工程規劃與提案展示的專案頁面。內容整合系統架構、核心模組、v5 計分模型、AI Insight Engine、Prompt 設計、API 定義與 Dashboard UI 概念，同時提供 PDF 下載。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  查看完整設計
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300/50 hover:bg-emerald-400/15"
                >
                  下載 PDF 文件
                </a>
              </div>
            </div>

            <div className={`${card} p-6`}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">System Snapshot</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ["架構層級", "Frontend / API / Decision / Data"],
                  ["核心模型", "v5 九大因子"],
                  ["AI 模組", "AI Insight Engine"],
                  ["文件下載", "PDF + Web"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="text-xs text-slate-400">{k}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="overview" className="mt-8 grid gap-6">
          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>1. 系統整體架構</h2>
            <p className={sectionText}>
              系統採用 Frontend、API、Decision 與 Data 四層架構。React Dashboard 負責呈現資料、AI 分析與下載入口；FastAPI 提供資料 API；Decision Layer 包含 Scoring Engine、Rule Engine 與 AI Insight Engine；Data Layer 則管理市場資料、新聞、券商帳戶與歷史訊號。
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 font-mono text-sm leading-7 text-slate-300">
              <div>React Dashboard</div>
              <div className="ml-4">↓</div>
              <div>FastAPI Backend</div>
              <div className="ml-4">↓</div>
              <div>Decision Layer</div>
              <div className="ml-4">├─ Scoring Engine</div>
              <div className="ml-4">├─ Rule Engine</div>
              <div className="ml-4">└─ AI Insight Engine</div>
              <div className="ml-4">↓</div>
              <div>Data Services</div>
              <div className="ml-4">├─ News Service</div>
              <div className="ml-4">├─ Market Service</div>
              <div className="ml-4">└─ Broker Service</div>
              <div className="ml-4">↓</div>
              <div>Database</div>
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>2. Data Flow / Decision Flow</h2>
            <p className={sectionText}>
              這一層說明從資料抓取到前端輸出的完整流程。建議先用規則與分數模型建立骨架，再由 AI 補上解釋、建議與風險提示。
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-5">
              {steps.map((item) => (
                <div key={item.no} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="text-xs font-semibold tracking-[0.18em] text-emerald-300">{item.no}</div>
                  <div className="mt-2 text-lg font-semibold text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>3. 核心模組</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="text-lg font-semibold text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>4. v5 計分模型</h2>
            <p className={sectionText}>
              系統以九大因子組成 v5 計分模型，最終透過加權方式得出 final score，對應偏多、偏空與觀望訊號。這一層是整個系統的可控骨架。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {scoreFactors.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm font-medium text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 font-mono text-sm leading-7 text-slate-300">
              Final Score = Σ(score × weight)
              <br />
              Score ≥ 35 → 強烈做多
              <br />
              Score ≥ 18 → 偏多
              <br />
              Score ≥ 10 → 觀察偏多
              <br />
              -10 ~ 10 → 不交易
              <br />
              Score ≤ -18 → 偏空
              <br />
              Score ≤ -35 → 強烈做空
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>5. AI Insight Engine</h2>
            <p className={sectionText}>
              AI 模組的定位是 Insight Layer，不直接控制交易，而是負責解讀新聞、綜合分數模型、輸出結論、理由、風險與建議操作方式。
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <div className="text-lg font-semibold text-white">AI 輸入</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• News</li>
                  <li>• Market Data</li>
                  <li>• Score Model</li>
                  <li>• Trading Rules</li>
                  <li>• Current Positions</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <div className="text-lg font-semibold text-white">AI 輸出</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• aiConclusion</li>
                  <li>• reasons</li>
                  <li>• warnings</li>
                  <li>• suggestion</li>
                  <li>• confidence</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>6. Prompt 設計</h2>
            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/85 p-6 font-mono text-sm leading-7 text-slate-300 whitespace-pre-wrap">
{`你是一個台指期交易分析助理。
請根據以下資料分析台指期行情並輸出：

1. 今日市場結論
2. 三個主要原因
3. 一個風險提醒
4. 建議交易策略
5. 信心度 (0~1)

資料包含：
• News
• Market Data
• Score Model
• Trading Rules
• Current Positions`}
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>7. API 設計</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-900/90">
                  <tr>
                    <th className="border-b border-white/10 px-4 py-3 font-semibold text-slate-200">Endpoint</th>
                    <th className="border-b border-white/10 px-4 py-3 font-semibold text-slate-200">功能</th>
                  </tr>
                </thead>
                <tbody>
                  {apiRows.map(([endpoint, desc]) => (
                    <tr key={endpoint} className="bg-slate-950/70">
                      <td className="border-b border-white/10 px-4 py-3 font-mono text-emerald-300">{endpoint}</td>
                      <td className="border-b border-white/10 px-4 py-3 text-slate-300">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>8. UI 可能的樣子</h2>
            <p className={sectionText}>
              Dashboard 採深色金融交易介面，強調即時性、層級清楚與快速判讀，適合作為產品提案頁、專案展示頁與設計白皮書頁面。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {uiBlocks.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm font-medium text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className={`${card} p-7 md:p-8`}>
            <h2 className={sectionTitle}>9. Download</h2>
            <p className={sectionText}>
              若你要把這份文件提供給工程師、合作夥伴或內部討論，可直接下載 PDF 版本。PDF 建議放在 Next.js 專案根目錄的 public 資料夾，部署到 Vercel 後即可用 /檔名 方式存取。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                下載 PDF
              </a>
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-slate-900"
              >
                回到總覽
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
