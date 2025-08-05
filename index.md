---
layout: default
---

<div class="home">

  <!-- Profile Section -->
  <div class="profile">
    <div class="profile-image">
      <img src="/assets/img/1c.png" alt="Jiajun Liu">
    </div>
    <div class="profile-info">
      <h1>Jiajun Liu</h1>
      <div class="social-links">
        <a href="mailto:{{ site.email }}">Email</a>
        <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div class="about">
    <h2>Basic Infomation</h2>
    <p>
      Hi there 👋 , I'm Jiajun Liu (刘嘉俊), a second-year undergraduate at <a href="http://ai.ruc.edu.cn/">Gaoling School of Artificial Intelligence</a>, Renmin University of China.
    </p>
    <p>
      My research interests lie in <strong>Reinforcement Learning, Spatial Intelligence, and Generative AI</strong>. I am currently advised by <a href="https://zhenxuan00.github.io/">Prof. Chongxuan Li</a> on 3D world models.
    </p>
    <p>
      I am good at Python, C/C++, and Linux development environments. I have hands-on experience with deep learning frameworks like PyTorch. I'm a firm open source contributor.
    </p>
  </div>


  <!-- Research Experience Section -->
  <div class="research">
    <h2>Research Experience</h2>
    <ul>
      <li>
        <strong>Jan 2025 - Present</strong> | Renmin University, China <br>
        <em>Advisor: <a href="https://zhenxuan00.github.io/">Chongxuan Li</a></em><br>
        Topic: 3D World Model - FlexWorld.
      </li>
    </ul>
    <ul>
      <li>
        <strong>Jun 2025 - Present</strong> | Northwestern University, USA <br>
        <em>Advisor: <a href="https://limanling.github.io/">Manling Li</a></em><br>
        Topic: Reasoning Models and Spatial VLM.
      </li>
    </ul>
  </div>



  <!-- Project Experience Section -->
<h2>Project Experience</h2>
  <div class="projects">
    <div class="project-item">
      <p class="project-title">
        Embodied Reasoner (With OSPP's funding) <span>Main Contributor</span>
        <a href="https://summer-ospp.ac.cn/org/prodetail/251760142?lang=zh&list=pro" class="project-links">[Page]</a>
      </p>
      <p class="project-description">
        Embodied-Reasoner is a multimodal model designed for deep reasoning and long-horizon interaction in embodied environments. I'm contributing to resolving two key bottlenecks — ambiguity in identical object instances and imprecise targeting of large objects, aiming to improve spatial accuracy and interaction robustness.
      </p>
    </div>
    <div class="project-item">
      <p class="project-title">
        RAGEN & VAGEN: Training Agents by Reinforcing Reasoning <span>Contributor</span>
        <a href="https://github.com/RAGEN-AI/RAGEN" class="project-links">[Code]</a>
      </p>
      <p class="project-description">
       This pair of projects utilize RL to operate effectively in interactive and stochastic environments. They address the challenges of extending RL beyond static, single-turn tasks by handling multi-turn interactions and environmental uncertainty. I contributed to developing env.spoc and bug detection.
      </p>
    </div>
  </div>


  <!-- Honors and Awards Section -->
  <div class="honors">
    <h2>Selected Honors and Awards</h2>
    <ul>
      <li><strong>Silver Medal</strong>, International Collegiate Programming Contest (ICPC) <strong>East-Asia Continent Final</strong> (Dec 2024)</li>
      <li><strong>Gold Medal</strong>, "Xiaomi Cup" China Collegiate Programming Contest (CCPC) Invitational Contest (Apr 2025)</li>
      <li><strong>Silver Medal</strong>, International Collegiate Programming Contest (ICPC) Asia Continent Regional (Nanjing) (Nov 2024)</li>
      <li><strong>Silver Medal</strong>, 2024 CCF Collegiate Computer Systems & Programming Contest (CCSP) (Oct 2024)</li>
      <li><strong>Ranked 589 Globally</strong>, 2024 Meta Hacker Cup Human track (Oct 2024)</li>
      <li><strong>2025 "Linghang" Intellectual Excellence Dean's Scholarship</strong> (Dec 2024)</li>
      <li><strong>2024 Academic Excellence Scholarship</strong> (Dec 2024)</li>
      <li><strong>National Second Prize</strong>, Chinese Physics Olympiad for High School Students (CPhO) (Oct 2021)</li>
    </ul>
  </div>

  <!-- Services and Presentations Section -->
  <div class="services">
    <h2>Services and Presentations</h2>
    <ul>
      <li><strong>Talk: "Intelligent Programming: The New Paradigm of Programming in the AI Era"</strong> (Feb 2025)</li>
      <li><strong>Talk: "Algorithm and Artificial Intelligence"</strong> (Mar 2025)</li>
      <li><strong>Video: "My Experience Using AI+ Tools to Create Videos"</strong> (Oct 2024)</li>
    </ul>
  </div>

  <!-- Education Section -->
  <div class="education">
    <h2>Education Experience</h2>
    <ul>
       <li><strong>Sep 2023 - Present</strong> | Bachelor's degree, Gaoling School of Artificial Intelligence, Renmin University of China</li>
       <li><em>With a GPA of 3.86/4.00 (Rank 3 / 60), and rank1 in the first and fourth semester</em></li>
    </ul>
  </div>

  <!-- Last Modified Time -->
  <div class="last-modified">
    <p>Last updated: {{ page.last_modified_at | default: site.time | date: "%B %d, %Y" }}</p>
  </div>

</div> 