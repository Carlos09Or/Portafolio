// =====================================================================
//  Editable content: update values and links here, not in index.html.
// =====================================================================

// Thesis metrics.
//   status: "final"   -> shown as is
//   status: "pending" -> shown with a "prelim." tag (value may still change)
const METRICS = {
  dataset_designs:        { value: "619,601", status: "final" },
  surrogate_params:       { value: "2.3M",    status: "final" },
  surrogate_targets:      { value: "6",       status: "final" },
  surrogate_r2:           { value: "0.96",    status: "pending" },
  agent_grounding:        { value: "100%",    status: "pending" },
  constraint_conv:        { value: "100%",    status: "pending" },
  constraint_dense:       { value: "50%",     status: "pending" },

  // Synthesis time & failure project
  timing_projects:        { value: "78,000+",  status: "pending" },
  timing_speedup:         { value: "~199,000×", status: "pending" },
  timing_within2x:        { value: "91.8%",   status: "pending" },
  timing_fail_auc:        { value: "0.912",   status: "pending" },
};

// Links. Leave a value empty ("") to hide the button that uses it.
const LINKS = {
  email:       "mailto:ortizg.carlosa@gmail.com",
  linkedin:    "https://www.linkedin.com/in/carlos-ortiz-094381302",
  github:      "https://github.com/Carlos09Or",
  cv:          "",   // e.g. "assets/docs/Carlos_Ortiz_CV.pdf" (version without phone number)
  thesis_repo: "",   // public repository of the thesis, once it can be shared
  poster:      "assets/docs/poster-purdue-surs-2026.pdf",

  // Project cards ("View project →"). "#" is a placeholder: replace with the real URL.
  project_thesis:     "thesis.html",
  project_timing:     "#",
  project_irrigation: "#",
};

// ---------------------------------------------------------------------

document.querySelectorAll("[data-metric]").forEach((el) => {
  const metric = METRICS[el.dataset.metric];
  if (!metric) return;
  el.textContent = metric.value;
  if (metric.status !== "final") {
    el.classList.add("is-pending");
    el.title = "Preliminary value from ongoing thesis work";
  }
});

document.querySelectorAll("[data-link]").forEach((el) => {
  const href = LINKS[el.dataset.link];
  if (href) {
    el.href = href;
  } else if (el.closest("h3")) {
    el.removeAttribute("href"); // keep project titles visible, just not clickable
  } else {
    el.hidden = true;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
