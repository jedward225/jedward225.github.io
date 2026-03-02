---
layout: default
---

<div class="home">

  <!-- Profile Section -->
  <div class="profile" id="profile">
    <div class="profile-image">
      <img src="/assets/img/1c.png" alt="Jiajun Liu">
    </div>
    <div class="profile-info">
      <h1>Jiajun Liu</h1>
      <p class="profile-meta">Undergraduate at Renmin University | GPA: 3.87 / 4.00 (Rank 3 / 58)</p>
      <div class="social-links">
        <a href="mailto:{{ site.email }}">Email</a>
        <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.xiaohongshu.com/user/profile/64b4c359000000001f007d4f" target="_blank" rel="noopener noreferrer">小红书</a>
        <span class="wechat-link">
          公众号
          <div class="wechat-tooltip">
            <img src="/assets/img/mp_wechat.jpg" alt="WeChat QR Code">
          </div>
        </span>
      </div>
    </div>
  </div>


  <!-- About Section -->
  <div class="about" id="about">
    <h2>🙋 About Me</h2>
    <p>
      Hi there 👋 , I'm Jiajun Liu (刘嘉俊), a third-year undergraduate at <a href="http://ai.ruc.edu.cn/">Gaoling School of Artificial Intelligence</a>, Renmin University of China.
    </p>
    <p>
        My research interests lie in <strong>Spatial Intelligence, World Model, and Embodied AI</strong>.
    </p>
    <p>
      I am proficient in Linux development, Python, C/C++, and PyTorch. I am an active open-source contributor.
    </p>
    <p>
      I am always open to collaborations, discussions, and making new friends. Feel free to <a href="mailto:{{ site.email }}">reach out</a>!
    </p>
  </div>


  <!-- News Section -->
  <div class="news" id="news">
    <h2>🔥 News</h2>
    <ul class="news-list" id="news-list">
      <li><span class="news-date">2026.03</span> Two papers accepted to ICLR 2026 Workshops (<a href="https://sites.google.com/view/world-model-workshop/home" target="_blank">World Models</a> & <a href="https://sites.google.com/view/lifelong-agents" target="_blank">Lifelong Agents</a>)!</li>
      <li><span class="news-date">2026.02</span> Bronze Medal at the 51st ICPC East Asia Continental Final in Hangzhou.</li>
      <li><span class="news-date">2026.02</span> New preprint: <a href="https://www.arxiv.org/abs/2602.07854" target="_blank">Geometry-Aware Rotary Position Embedding for Consistent Video World Model</a> is available now!</li>
      <li><span class="news-date">2025.12</span> Awarded Most Potential Award at Open Source Promotion Plan (OSPP) 2025.</li>
      <li><span class="news-date">2025.09</span> Honored with National Scholarship (Top 0.4% Nationwide).</li>
      <li><span class="news-date">2025.05</span> Selected for the Tsinghua College of AI Undergraduate Academic Exchange Program as a sophomore.</li>
    </ul>
    <button class="news-toggle" id="news-toggle" style="display:none;" onclick="toggleNews()">Show More</button>
  </div>


  <!-- Research Experience Section -->
  <div class="research" id="research">
    <h2>🔬 Research Experience</h2>
    <div class="research-item">
      <div class="research-logo">
        <img src="/assets/img/Tsinghua_University_Logo.svg.png" alt="Tsinghua University">
      </div>
      <div class="research-content">
        <div class="research-header">
          <div class="research-title">Research Intern, <a href="https://iiis.tsinghua.edu.cn/">Xu-Lab</a>, Tsinghua IIIS & Qizhi Institute, China</div>
          <div class="research-date">Oct 2025 - Present</div>
        </div>
        <div class="research-details">
          <p><strong>Advisor:</strong> <a href="https://www.mengdixu.me/">Mengdi Xu</a></p>
          <p><strong>Topic:</strong> In-context robot learning.</p>
        </div>
      </div>
    </div>

    <div class="research-item">
      <div class="research-logo">
        <img src="/assets/img/Northwestern_University_seal.svg.png" alt="Northwestern University">
      </div>
      <div class="research-content">
        <div class="research-header">
          <div class="research-title">Research Intern, <a href="https://mll-lab-nu.github.io/">MLL-Lab</a>, Northwestern University, USA</div>
          <div class="research-date">Jun 2025 - Sep 2025</div>
        </div>
        <div class="research-details">
          <p><strong>Advisor:</strong> <a href="https://limanling.github.io/">Manling Li</a></p>
          <p><strong>Topic:</strong> VLM agents with tool-use for active novel-view synthesis on spatial intelligence tasks, in collaboration with Microsoft.</p>
    
        </div>
      </div>
    </div>
    
    <div class="research-item">
      <div class="research-logo">
        <img src="/assets/img/Renmin_University_of_China_logo.svg.png" alt="Renmin University">
      </div>
      <div class="research-content">
        <div class="research-header">
          <div class="research-title">Research Intern, <a href="https://github.com/ML-GSAI/">GSAI-ML Group</a>, Renmin University, China</div>
          <div class="research-date">Jan 2025 - Aug 2025</div>
        </div>
        <div class="research-details">
          <p><strong>Advisor:</strong> <a href="https://zhenxuan00.github.io/">Chongxuan Li</a></p>
          <p><strong>Topic:</strong> 3D world model for explorable scene generation from a single image or text prompt.</p>
        </div>
      </div>
    </div>
  </div>


  <!-- Publications Section -->
  <div class="publications" id="publications">
    <h2>📝 Publications & Preprints</h2>
    <p class="section-note">Sorted by recency. * denotes equal contribution.</p>

    <div class="publication-item">
      <div class="publication-image">
        <img src="/assets/img/viewrope.png" alt="ViewRoPE">
      </div>
      <div class="publication-content">
        <div class="publication-title">
          Geometry-Aware Rotary Position Embedding for Consistent Video World Model
        </div>
        <div class="publication-authors">
          Chendong Xiang*, <strong>Jiajun Liu*</strong>, Jintao Zhang*, Xiao Yang, Zhengwei Fang, Shizun Wang, Zijun Wang, Yingtian Zou, Hang Su, Jun Zhu
        </div>
        <div class="publication-meta">
          <div class="publication-venue">WorldModels@ICLR26'</div>
          <div class="publication-links">
            <a href="https://www.arxiv.org/abs/2602.07854" target="_blank"><img src="https://img.shields.io/badge/arXiv-2602.07854-b31b1b?logo=arxiv" alt="arXiv"></a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="publication-item">
      <div class="publication-image">
        <img src="/assets/img/embodied-reasoner.png" alt="Embodied Reasoner">
      </div>
      <div class="publication-content">
        <div class="publication-title">
          Embodied Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks
        </div>
        <div class="publication-authors">
          Wenqi Zhang*, Mengna Wang*, Gangao Liu, Huixin Xu, Yiwei Jiang, Yongliang Shen, Guiyang Hou, Zhe Zheng, Hang Zhang, Xin Li, <strong>Jiajun Liu</strong>, Weiming Lu, Peng Li, Yueting Zhuang
        </div>
        <div class="publication-meta">
          <div class="publication-venue">LLAgents@ICLR26'</div>
          <div class="publication-links">
            <a href="https://arxiv.org/abs/2503.21696" target="_blank"><img src="https://img.shields.io/badge/arXiv-2503.21696-b31b1b?logo=arxiv" alt="arXiv"></a>
            <a href="https://embodied-reasoner.github.io/" target="_blank"><img src="https://img.shields.io/badge/Project-Page-blue" alt="Project Page"></a>
            <a href="https://github.com/zwq2018/embodied_reasoner" target="_blank"><img src="https://img.shields.io/github/stars/zwq2018/embodied_reasoner?style=social" alt="GitHub Stars"></a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Project Experience Section -->
  <div class="projects" id="projects">
    <h2>💻 Selected Open-Source Projects</h2>

    <div class="project-description-item">
      <h3>Embodied Reasoner (With OSPP's funding)</h3>
      <div class="project-meta">
        <p class="project-role">Main Contributor</p>
        <div class="publication-links">
          <a href="https://summer-ospp.ac.cn/org/prodetail/251760142?lang=zh&list=pro" target="_blank"><img src="https://img.shields.io/badge/Project-Page-blue" alt="Project Page"></a>
          <a href="https://github.com/zwq2018/embodied_reasoner" target="_blank"><img src="https://img.shields.io/github/stars/zwq2018/embodied_reasoner?style=social" alt="GitHub Stars"></a>
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
          <a href="https://ragen-ai.github.io/" target="_blank"><img src="https://img.shields.io/badge/Project-Page-blue" alt="Project Page"></a>
          <a href="https://github.com/RAGEN-AI/RAGEN" target="_blank"><img src="https://img.shields.io/github/stars/RAGEN-AI/RAGEN?style=social" alt="GitHub Stars"></a>
        </div>
      </div>
      <p>
        This twin of projects empower agents with RL to operate effectively in interactive and stochastic environments by handling multi-turn interactions and environmental uncertainty. I contributed to developing more environments and mask functions to compute the loss only for the parts generated by the model, which actually made training more stable.
      </p>
    </div>
  </div>


  <!-- Awards Section -->
  <div class="awards" id="awards">
    <h2>🏆 Selected Awards</h2>
    <ul>
      <li><span>🥈 <span class="award-highlight">Silver Medal</span>, International Collegiate Programming Contest (ICPC) <span class="award-highlight">East-Asia Continent Final</span></span> <span class="date-right">Dec 2024</span></li>
      <li><span>🥇 <span class="award-highlight">Gold Medal</span>, International Collegiate Programming Contest (ICPC) Asia Regional (Wuhan)</span> <span class="date-right">Nov 2025</span></li>
      <li><span>🥇 <span class="award-highlight">Gold Medal</span>, "Xiaomi Cup" China Collegiate Programming Contest (CCPC) Invitational Contest</span> <span class="date-right">Apr 2025</span></li>
      <li><span>🥈 <span class="award-highlight">Silver Medal</span>, 2024 CCF Collegiate Computer Systems & Programming Contest (CCSP)</span> <span class="date-right">Oct 2024</span></li>
      <li><span>🏅 <span class="award-highlight">Most Potential Award</span>, Open Source Promotion Plan (OSPP) 2025</span> <span class="date-right">Dec 2025</span></li>
    </ul>
  </div>

  <!-- Scholarship Section -->
  <div class="scholarship" id="scholarship">
    <h2>🎓 Scholarships</h2>
    <ul>
      <li><span>🌟 National Scholarship</span> <span class="date-right">Sep 2025</span></li>
      <li><span>✨ "Linghang" Intellectual Excellence Dean's Scholarship</span> <span class="date-right">Dec 2024</span></li>
      <li><span>🌟 Outstanding Student Leader Scholarship</span> <span class="date-right">Sep 2024</span></li>
      <li><span>✨ Third Prize Scholarship for Excellence in Social Work and Volunteering</span> <span class="date-right">Sep 2025</span></li>
    </ul>
  </div>


  <!-- Services and Presentations Section -->
  <div class="services" id="services">
    <h2>🎤 Services & Presentations</h2>
    <ul>
      <li> <strong>Reviewer:</strong> ICLR 2026 Workshop on World Models</li>
      <li> <strong>Video:</strong> "My Experience Using AI+ Tools to Create Videos"<div class="service-detail">Invited by CCF for <em>China National Computer Conference (CNCC)</em> Super Forum</div></li>
      <li> <strong>Talk:</strong> "Algorithm and Artificial Intelligence"<div class="service-detail">Invited by Gaoling School of AI & School of Information, Renmin University of China</div></li>
    </ul>
  </div>


  <!-- Interests Section -->
  <div class="interests" id="interests">
    <h2>🎯 Interests & Hobbies</h2>

    <div class="interests-carousel">
      <div class="carousel-main">
        <!-- Navigation buttons -->
        <button class="carousel-nav carousel-nav-left" id="prev-btn">
          <span>‹</span>
        </button>
    
        <div class="carousel-track">
        <div class="carousel-slide active">
          <div class="slide-image">
            <img src="/assets/img/interests/basketball.jpg" alt="Basketball">
          </div>
          <div class="slide-text">
            <h3>🏀 Basketball</h3>
            <p>I enjoy playing basketball, as it keeps me active and sharpens my teamwork skills. It has taught me the value of strategy, coordination, and the importance of consistent practice and persistence. I once won the All-Star championship in a Freshman basketball tournament.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            <img src="/assets/img/interests/sailing.jpg" alt="Sailing">
          </div>
          <div class="slide-text">
            <h3>⛵ Sailing</h3>
            <p>Sailing represents my love for adventure and the sea. It's a sport that requires patience, understanding of weather patterns, and the ability to work with natural elements. I once won the runner-up in the National Amateur Sailing Competition.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            <img src="/assets/img/ed-sheeran.jpg" alt="Music">
          </div>
          <div class="slide-text">
            <h3>🎵 Music</h3>
            <p>Music is my creative outlet and a way to unwind. I enjoy a wide range of genres — music helps me stay focused during work and sparks inspiration for my projects. I also love singing, and my favorite artists are Taylor Swift and Ed Sheeran.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            <img src="/assets/img/interests/coding.jpg" alt="Coding Contest">
          </div>
          <div class="slide-text">
            <h3>💻 Coding Contest</h3>
            <p>Unlike most algorithm competition medalists, I had no OI experience in high school. Fortunately, I found two like-minded teammates who also started from scratch. Together, we trained and grew. Programming contests like ICPC challenged me intellectually and ignited my passion throughout college.</p>
          </div>
        </div>
    
        <div class="carousel-slide">
          <div class="slide-image">
            <img src="/assets/img/harry-potter.jpg" alt="Video Editing">
          </div>
          <div class="slide-text">
            <h3>🎬 Video Editing</h3>
            <p>Video editing allows me to express my creativity through visual storytelling. I enjoy combining footage, music, and especially visual effects to craft compelling content. Feel free to follow me on <a href="https://space.bilibili.com/453798427" target="_blank" rel="noopener noreferrer">Bilibili</a>.</p>
          </div>
        </div>
      </div>
    
        <button class="carousel-nav carousel-nav-right" id="next-btn">
          <span>›</span>
        </button>
      </div>
    
      <!-- Dots indicator -->
      <div class="carousel-dots">
        <span class="dot active" data-slide="0"></span>
        <span class="dot" data-slide="1"></span>
        <span class="dot" data-slide="2"></span>
        <span class="dot" data-slide="3"></span>
        <span class="dot" data-slide="4"></span>
      </div>
    </div>
  </div>


  <!-- Last Modified Time -->
  <div class="last-modified">
    <p>Last Updated: March, 2026</p>
  </div>

</div>
