---
layout: default
image: /assets/img/1c.png
last_modified_at: 2026-09-26
---

<div class="home">

  <!-- Profile Section -->
  <div class="profile" id="profile">
    <div class="profile-image">
      {% include image.html src="/assets/img/1c.png" alt="Jiajun Liu" loading="eager" %}
    </div>
    <div class="profile-info">
      <h1>Jiajun Liu</h1>
      <p class="profile-role"> Incoming Ph.D. Student, Institute for Interdisciplinary Information Sciences, Tsinghua University</p>
      <p class="profile-role"> Undergraduate, Gaoling School of Artificial Intelligence, Renmin University of China</p>
      <div class="social-links">
        <a href="mailto:{{ site.email }}">Email</a>
        <a href="https://scholar.google.com/citations?user=JIGENycAAAAJ&hl=zh-CN&authuser=1" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}" download>CV</a>
        <a href="https://x.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">Twitter / X</a>
        <a href="https://www.xiaohongshu.com/user/profile/64b4c359000000001f007d4f" target="_blank" rel="noopener noreferrer">小红书</a>
        <details class="wechat-link">
          <summary>公众号</summary>
          <div class="wechat-tooltip">
            {% include image.html src="/assets/img/mp_wechat.jpg" alt="WeChat QR Code" %}
          </div>
        </details>
      </div>
    </div>
  </div>


  <!-- About Section -->
  <div class="about" id="about">
    <h2>About</h2>
    <p>
      Hi there 👋🏻, I am Jiajun Liu (刘嘉俊), a senior undergraduate student at the <a href="http://ai.ruc.edu.cn/">Gaoling School of Artificial Intelligence</a>, Renmin University. I will join the <a href="https://iiis.tsinghua.edu.cn/">Institute for Interdisciplinary Information Sciences (IIIS)</a>, Tsinghua University as a Ph.D. student in Fall 2027, advised by Prof. <a href="https://www.mengdixu.me/">Mengdi Xu</a> with a current focus on <strong>robot learning from non-expert data</strong>.
    </p>
    <p>
      Previously, I spent a rewarding summer at <a href="https://mll-lab-nu.github.io/">MLL Lab</a>, Northwestern University, working with <a href="https://jameskrw.github.io/">Kangrui Wang</a>, <a href="https://zihanwang314.github.io/">Zihan Wang</a> and Prof. <a href="https://limanling.github.io/">Manling Li</a>. Before that, I was fortunate to work with Prof. <a href="https://zhenxuan00.github.io/">Chongxuan Li</a> and Prof. <a href="https://ml.cs.tsinghua.edu.cn/~jun/index.shtml">Jun Zhu</a> on 3D/video world models.
    </p>
    <p>
      My research interests lie in <strong>spatial intelligence, world models and embodied AI</strong>. I am particularly interested in building learning systems that enable embodied agents to acquire useful behaviors from diverse data and act reliably in the physical world. I am always open to collaborations, discussions, and new connections.
    </p>
  </div>


  <!-- News Section -->
  <div class="news" id="news">
    <h2>News</h2>
    {% include news.html %}
  </div>


  <!-- Research Experiences Section -->
  <div class="research" id="research">
    <h2>Research Experiences</h2>
    {% for experience in site.data.experiences %}
      {% include experience.html experience=experience %}
    {% endfor %}
  </div>


  <!-- Publications Section -->
  <div class="publications" id="publications">
    <h2>Publications & Preprints</h2>
    <p class="section-note">* denotes equal contribution; † denotes corresponding author.</p>
    <div class="publication-filter" role="group" aria-label="Publication filter" hidden>
      <button class="publication-filter-btn active" type="button" data-publication-filter="selected" aria-pressed="true">Selected</button>
      <button class="publication-filter-btn" type="button" data-publication-filter="all" aria-pressed="false">All</button>
    </div>

    {% for publication in site.data.publications %}
      {% include publication.html publication=publication %}
    {% endfor %}
  </div>


  <!-- Project Experience Section -->
  <div class="projects" id="projects">
    <h2>Selected Open-Source Projects</h2>

    <div class="project-description-item">
      <h3>Embodied Reasoner (With OSPP's funding)</h3>
      <div class="project-meta">
        <p class="project-role">Main Contributor</p>
        <div class="publication-links">
          <a href="https://summer-ospp.ac.cn/org/prodetail/251760142?lang=zh&list=pro" target="_blank" rel="noopener noreferrer">Project</a>
          <a href="https://github.com/zwq2018/embodied_reasoner" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
      <p>
        Embodied-Reasoner (ER.) is a multimodal model designed for deep reasoning and long-horizon interaction. Through OSPP, similar to GSoC, I was selected by the <a href="https://www.agiros.org.cn/#/index">AGIROS</a> Community as the contributor responsible for ER. I took charge of benchmarking ER. on ALFRED and contributed to resolving two key bottlenecks: ambiguity in distinguishing identical object instances and imprecise targeting of large objects, thereby improving spatial accuracy and interaction robustness.
      </p>
    </div>
    
    <div class="project-description-item">
      <h3>RAGEN & VAGEN: Training Agents by Reinforcing Reasoning</h3>
      <div class="project-meta">
        <p class="project-role">Contributor</p>
        <div class="publication-links">
          <a href="https://ragen-ai.github.io/" target="_blank" rel="noopener noreferrer">Project</a>
          <a href="https://github.com/RAGEN-AI/RAGEN" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
      <p>
        This twin of projects empower agents with RL to operate effectively in interactive and stochastic environments by handling multi-turn interactions and environmental uncertainty. I contributed to developing more environments and mask functions to compute the loss only for the parts generated by the model, which actually made training more stable.
      </p>
    </div>
  </div>


  <!-- Awards Section -->
  <div class="awards" id="awards">
    <h2>Selected Awards</h2>
    <ul>
      <li><span><span class="award-highlight">Most Potential Award</span>, Open Source Promotion Plan (OSPP) 2025</span> <span class="date-right">Dec 2025</span></li>
      <li><span><span class="award-highlight">Gold Medal</span>, International Collegiate Programming Contest (ICPC) Asia Regional (Wuhan)</span> <span class="date-right">Nov 2025</span></li>
      <li><span><span class="award-highlight">Gold Medal</span>, "Xiaomi Cup" China Collegiate Programming Contest (CCPC) Invitational Contest</span> <span class="date-right">Apr 2025</span></li>
      <li><span><span class="award-highlight">Silver Medal</span>, International Collegiate Programming Contest (ICPC) <span class="award-highlight">East-Asia Continent Final</span></span> <span class="date-right">Dec 2024</span></li>
      <li><span><span class="award-highlight">Silver Medal</span>, 2024 CCF Collegiate Computer Systems & Programming Contest (CCSP)</span> <span class="date-right">Oct 2024</span></li>
    </ul>
  </div>

  <!-- Scholarship Section -->
  <div class="scholarship" id="scholarship">
    <h2>Selected Scholarships</h2>
    <ul>
      <li><span><span class="award-highlight">China National Petroleum Corporation Scholarship (CNPC Scholarship)</span></span> <span class="date-right">Sep 2026</span></li>
      <li><span><span class="award-highlight">SenseTime Scholarship Nomination</span></span> <span class="date-right">Jun 2026</span></li>
      <li><span><span class="award-highlight">National Scholarship</span></span> <span class="date-right">Sep 2025</span></li>
      <li><span><span class="award-highlight">"Linghang" Intellectual Excellence Dean's Scholarship</span></span> <span class="date-right">Dec 2024</span></li>
      <li><span><span class="award-highlight">Outstanding Student Leader Scholarship</span></span> <span class="date-right">Sep 2024</span></li>
    </ul>
  </div>


  <!-- Services and Presentations Section -->
  <div class="services" id="services">
    <h2>Services & Presentations</h2>
    <ul>
      <li> <strong>Reviewer:</strong> ICLR 2027</li>
      <li> <strong>Invited Video:</strong> "My Experience Using AI+ Tools to Create Videos"<div class="service-detail">Invited by CCF for <em>China National Computer Conference (CNCC)</em> Super Forum</div></li>
      <li> <strong>Invited Talk:</strong> "Algorithm and Artificial Intelligence"<div class="service-detail">Invited by Gaoling School of AI & School of Information, Renmin University of China</div></li>
    </ul>
  </div>


  <!-- Interests Section -->
  <div class="interests" id="interests">
    <h2>Interests & Hobbies</h2>

    <div class="interests-carousel">
      <div class="carousel-main">
        <!-- Navigation buttons -->
        <button class="carousel-nav carousel-nav-left" id="prev-btn" type="button" aria-label="Previous interest" hidden>
          <span>‹</span>
        </button>
    
        <div class="carousel-track" aria-live="polite">
        <div class="carousel-slide active">
          <div class="slide-image">
            {% include image.html src="/assets/img/interests/basketball.jpg" alt="Basketball" %}
          </div>
          <div class="slide-text">
            <h3>Basketball</h3>
            <p>I enjoy playing basketball, as it keeps me active and sharpens my teamwork skills. It has taught me the value of strategy, coordination, and the importance of consistent practice and persistence. I once won the All-Star championship in a Freshman basketball tournament.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            {% include image.html src="/assets/img/interests/sailing.jpg" alt="Sailing" %}
          </div>
          <div class="slide-text">
            <h3>Sailing</h3>
            <p>Sailing represents my love for adventure and the sea. It's a sport that requires patience, understanding of weather patterns, and the ability to work with natural elements. I once won the runner-up in the National Amateur Sailing Competition.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            {% include image.html src="/assets/img/ed-sheeran.jpg" alt="Music" %}
          </div>
          <div class="slide-text">
            <h3>Music</h3>
            <p>Music is my creative outlet and a way to unwind. I enjoy a wide range of genres — music helps me stay focused during work and sparks inspiration for my projects. I also love singing, and my favorite artists are Taylor Swift and Ed Sheeran.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            {% include image.html src="/assets/img/interests/coding.jpg" alt="Coding Contest" %}
          </div>
          <div class="slide-text">
            <h3>Coding Contest</h3>
            <p>Unlike most algorithm competition medalists, I had no OI experience in high school. Fortunately, I found two like-minded teammates who also started from scratch. Together, we trained and grew. Programming contests like ICPC challenged me intellectually and ignited my passion throughout college.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            {% include image.html src="/assets/img/harry-potter.jpg" alt="Video Editing" %}
          </div>
          <div class="slide-text">
            <h3>Video Editing</h3>
            <p>Video editing allows me to express my creativity through visual storytelling. I enjoy combining footage, music, and especially visual effects to craft compelling content. Feel free to follow me on <a href="https://space.bilibili.com/453798427" target="_blank" rel="noopener noreferrer">Bilibili</a>.</p>
          </div>
        </div>
      </div>
    
        <button class="carousel-nav carousel-nav-right" id="next-btn" type="button" aria-label="Next interest" hidden>
          <span>›</span>
        </button>
      </div>
    
      <!-- Dots indicator -->
      <div class="carousel-dots" role="group" aria-label="Choose an interest" hidden>
        <button class="dot active" type="button" data-slide="0" aria-label="Show Basketball" aria-pressed="true"></button>
        <button class="dot" type="button" data-slide="1" aria-label="Show Sailing" aria-pressed="false"></button>
        <button class="dot" type="button" data-slide="2" aria-label="Show Music" aria-pressed="false"></button>
        <button class="dot" type="button" data-slide="3" aria-label="Show Coding Contest" aria-pressed="false"></button>
        <button class="dot" type="button" data-slide="4" aria-label="Show Video Editing" aria-pressed="false"></button>
      </div>
    </div>
  </div>


  <!-- Last Modified Time -->
  <div class="last-modified">
    <p>Last Updated: {{ page.last_modified_at | date: '%b, %Y' }}</p>
  </div>

</div>
