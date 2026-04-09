---
layout: page
permalink: /repositories/
title: repositories
description: Curated GitHub repositories, highlights, and profile trophies.
nav: true
nav_order: 4
---

<div class="repository-page-intro mb-4">
  <p class="mb-0 text-muted">
    Highlights below use curated metadata in <code>_data/repositories.yml</code> (summaries, tags, optional demo/docs links). Star and fork badges load from Shields.io.
  </p>
</div>

{% if site.data.repositories.github_users %}

## GitHub profile

<div class="repositories repositories--profile">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

### {{ user }}

{% endif %}
<div class="repositories repositories--trophies repo-trophy-block">
  {% include repository/repo_trophies.liquid username=user %}
</div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## Repositories

<div class="repository-filter-bar mb-3 d-flex flex-wrap align-items-center gap-2">
  <span class="text-muted small me-1">Filter by tag:</span>
  <button type="button" class="btn btn-sm repo-filter-chip active" data-filter="all" aria-pressed="true">All</button>
  {% if site.data.repositories.repo_filter_tags %}
    {% for tag in site.data.repositories.repo_filter_tags %}
      <button type="button" class="btn btn-sm repo-filter-chip" data-filter="{{ tag | slugify }}" aria-pressed="false">{{ tag }}</button>
    {% endfor %}
  {% endif %}
</div>

<div class="repositories repository-showcase-grid" id="repo-showcase-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% assign m = site.data.repositories.repo_details[repo] %}
    {% if m and m.featured %}
      {% include repository/repo.liquid repository=repo %}
    {% endif %}
  {% endfor %}
  {% for repo in site.data.repositories.github_repos %}
    {% assign m = site.data.repositories.repo_details[repo] %}
    {% unless m and m.featured %}
      {% include repository/repo.liquid repository=repo %}
    {% endunless %}
  {% endfor %}
</div>

<script>
(function () {
  var grid = document.getElementById("repo-showcase-grid");
  if (!grid) return;
  var cards = grid.querySelectorAll(".repo-showcase-card");

  function applyFilter(slug) {
    var showAll = !slug || slug === "all";
    cards.forEach(function (card) {
      var raw = (card.getAttribute("data-repo-tags") || "").trim();
      var tags = raw ? raw.split(/\s+/) : [];
      var show = showAll || tags.indexOf(slug) !== -1;
      card.style.display = show ? "" : "none";
    });
  }

  document.querySelectorAll(".repo-filter-chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var slug = btn.getAttribute("data-filter") || "all";
      applyFilter(slug);
      document.querySelectorAll(".repo-filter-chip").forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      btn.classList.add("active");
    });
  });
})();
</script>

{% endif %}
