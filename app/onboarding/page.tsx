"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HudNavigation } from "../../components/hud-navigation"
import { SafeSignInButton, SafeSignUpButton } from "../../components/clerk-safe"

const developerRepos = [
  { name: "werkdeck-platform", language: "TypeScript", stars: 42, updated: "updated 2d ago" },
  { name: "signal-processor", language: "Rust", stars: 18, updated: "updated 5d ago" },
  { name: "infra-blueprints", language: "HCL", stars: 9, updated: "updated 1w ago" },
]

const developerSteps = ["CONNECT", "SELECT REPOS", "PROFILE"]
const companySteps = ["IDENTITY", "STACK", "BUDGET"]

export default function OnboardingPage() {
  const router = useRouter()
  const [flow, setFlow] = useState<"developer" | "company">("developer")
  const [step, setStep] = useState(1)
  const [githubConnected, setGithubConnected] = useState(false)
  const [selectedRepos, setSelectedRepos] = useState<string[]>(["werkdeck-platform"])
  const [role, setRole] = useState("Full-Stack Engineer")
  const [seniority, setSeniority] = useState("Senior")
  const [companyEmail, setCompanyEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [stack, setStack] = useState("")
  const [budget, setBudget] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const steps = flow === "developer" ? developerSteps : companySteps
  const toggleRepo = (name: string) =>
    setSelectedRepos((current) =>
      current.includes(name) ? current.filter((repo) => repo !== name) : [...current, name]
    )
  const next = () => setStep((current) => Math.min(current + 1, 3))

  return (
    <main className="onboarding-page">
      <header className="onboarding-header">
        <a href="/" className="onboarding-brand">
          WERKDECK <span>● ONBOARDING</span>
        </a>
        <div className="onboarding-status">
          <button type="button" onClick={() => router.push("/")}>
            SIGN IN
          </button>
          <i /> SYSTEM READY <b>SECURE SESSION</b>
        </div>
      </header>

      <div className="onboarding-progress" aria-label={`Onboarding progress step ${step} of 3`}>
        <div className="progress-track">
          <span style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        {steps.map((label, index) => (
          <div
            key={label}
            className={`progress-step ${step === index + 1 ? "active" : ""} ${
              step > index + 1 ? "complete" : ""
            }`}
          >
            <b>0{index + 1}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className="onboarding-layout">
        <aside className="onboarding-aside">
          <p className="hud-kicker">INITIALIZE / {flow === "developer" ? "DEVELOPER" : "COMPANY"}</p>
          <h1>
            {flow === "developer" ? (
              <>
                Build your
                <br />
                <em>ProofScore.</em>
              </>
            ) : (
              <>
                Find your next
                <br />
                <em>signal.</em>
              </>
            )}
          </h1>
          <p className="onboarding-aside-copy">
            {flow === "developer"
              ? "Connect your work. We analyze the signal, not the noise."
              : "Tell us what you are building. We will surface the people who can build it."}
          </p>
          <div className="flow-switch" role="tablist" aria-label="Choose onboarding flow">
            <button
              type="button"
              className={flow === "developer" ? "active" : ""}
              onClick={() => {
                setFlow("developer")
                setStep(1)
              }}
              role="tab"
              aria-selected={flow === "developer"}
            >
              DEVELOPER
            </button>
            <button
              type="button"
              className={flow === "company" ? "active" : ""}
              onClick={() => {
                setFlow("company")
                setStep(1)
              }}
              role="tab"
              aria-selected={flow === "company"}
            >
              COMPANY
            </button>
          </div>
        </aside>

        <section className="onboarding-panel" aria-live="polite">
          <div className="panel-meta">
            <span>FLOW / {flow.toUpperCase()}</span>
            <span>STEP 0{step} / 03</span>
          </div>

          {flow === "developer" ? (
            <>
              {step === 1 && (
                <div className="onboarding-step">
                  <p className="step-index">01 / SOURCE ACCESS</p>
                  <h2>
                    Connect your
                    <br />
                    <strong>GitHub signal.</strong>
                  </h2>
                  <p className="step-copy">
                    Read-only access. No commits. No noise. Just the public work that proves how you think.
                  </p>
                 {githubConnected ? (
                  <div className="connected-state">
                    <span>●</span>
                    <div>
                      <strong>GITHUB CONNECTED</strong>
                      <small>werkdeck / verified OAuth session</small>
                    </div>
                    <b>OK</b>
                  </div>
                ) : (
                  <SafeSignUpButton>
                    <span
                      className="primary-onboarding"
                      role="button"
                      tabIndex={0}
                      onClick={() => setGithubConnected(true)}
                    >
                      <span>GH</span> CONTINUE WITH GITHUB <b>↗</b>
                    </span>
                  </SafeSignUpButton>
                )}
                  <button type="button" className="text-action" onClick={next}>
                    {githubConnected ? "CONTINUE TO REPOSITORIES" : "I'LL DO THIS LATER"} <span>→</span>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="onboarding-step">
                  <p className="step-index">02 / SELECT EVIDENCE</p>
                  <h2>
                    Select repositories
                    <br />
                    <strong>to audit.</strong>
                  </h2>
                  <p className="step-copy">
                    Choose the public repositories that best represent your technical range.
                  </p>
                  <div className="repo-list">
                    {developerRepos.map((repo) => (
                      <label
                        key={repo.name}
                        className={`repo-row ${selectedRepos.includes(repo.name) ? "selected" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedRepos.includes(repo.name)}
                          onChange={() => toggleRepo(repo.name)}
                        />
                        <span className="fake-check">✓</span>
                        <span className="repo-info">
                          <strong>{repo.name}</strong>
                          <small>
                            {repo.language} · {repo.stars} stars · {repo.updated}
                          </small>
                        </span>
                        <span className="repo-arrow">↗</span>
                      </label>
                    ))}
                  </div>
                  <button type="button" className="primary-onboarding" onClick={next}>
                    CONTINUE TO PROFILE <b>→</b>
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="onboarding-step">
                  <p className="step-index">03 / PROFESSIONAL SIGNAL</p>
                  <h2>
                    Define your
                    <br />
                    <strong>developer profile.</strong>
                  </h2>
                  <p className="step-copy">This frames the signal we surface to companies.</p>
                  <div className="field-grid">
                    <label>
                      PRIMARY ROLE
                      <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>Full-Stack Engineer</option>
                        <option>Lead Architect</option>
                        <option>Backend Engineer</option>
                        <option>Infrastructure Engineer</option>
                      </select>
                    </label>
                    <label>
                      SENIORITY
                      <select value={seniority} onChange={(e) => setSeniority(e.target.value)}>
                        <option>Senior</option>
                        <option>Staff</option>
                        <option>Lead</option>
                        <option>Principal</option>
                      </select>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="primary-onboarding"
                    disabled={isAnalyzing}
                    onClick={() => {
                      setIsAnalyzing(true)
                      window.setTimeout(() => router.push("/dashboard/feed"), 1500)
                    }}
                  >
                    {isAnalyzing ? (
                      <>
                        <span className="onboarding-spinner" aria-hidden="true" /> ANALYZING REPOSITORIES &
                        COMMITS...
                      </>
                    ) : (
                      <>
                        GENERATE PROOFSCORE INITIAL <b>↗</b>
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="onboarding-step company-step">
              {step === 1 ? (
                <>
                  <p className="step-index">01 / IDENTITY</p>
                  <h2>
                    Recruit with
                    <br />
                    <strong>evidence.</strong>
                  </h2>
                  <p className="step-copy">Tell us who is building the next signal.</p>
                  <div className="company-fields">
                    <label>
                      CORPORATE EMAIL
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                      />
                    </label>
                    <label>
                      COMPANY NAME
                      <input
                        placeholder="Company / team name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </label>
                  </div>
                  <button type="button" className="primary-onboarding" onClick={() => setStep(2)}>
                    CONTINUE TO STACK <b>→</b>
                  </button>
                </>
              ) : (
                <>
                  <p className="step-index">02 / STACK & BUDGET</p>
                  <h2>
                    Define your
                    <br />
                    <strong>search signal.</strong>
                  </h2>
                  <p className="step-copy">Calibrate the technical profile you need to find.</p>
                  <div className="company-fields">
                    <label>
                      TECHNICAL STACK
                      <input
                        placeholder="TypeScript, Go, AWS..."
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                      />
                    </label>
                    <label>
                      HIRING BUDGET
                      <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                        <option value="">Select range</option>
                        <option>$80k — $120k</option>
                        <option>$120k — $180k</option>
                        <option>$180k+</option>
                      </select>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="primary-onboarding"
                    onClick={() => router.push("/dashboard/feed")}
                  >
                    SAVE COMPANY SIGNAL <b>→</b>
                  </button>
                  <button type="button" className="text-action" onClick={() => setStep(1)}>
                    ← BACK TO IDENTITY
                  </button>
                </>
              )}
            </div>
          )}

          <div className="panel-foot">
            <span>
              <i /> ENCRYPTED / GDPR READY
            </span>
            <span>WERKDECK ENGINE v1.0</span>
          </div>
        </section>
      </section>
      <HudNavigation />
    </main>
  )
}