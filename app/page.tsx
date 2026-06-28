"use client";

import { useEffect, useMemo, useState } from "react";

const works = [
  {
    title: "三峡新移民",
    year: "2004",
    category: "site",
    categoryName: "现场项目",
    image: "/assets/works/sanxia-xinyimin-2004.jpg",
    description:
      "面对水位、拆迁与迁徙，绘画记录人在巨大工程中的身体尺度。",
  },
  {
    title: "老妈",
    year: "2020",
    category: "portrait",
    categoryName: "人物肖像",
    image: "/assets/works/laoma-2020.jpg",
    description:
      "人物常以松弛姿态出现，目光、衣着与环境共同构成社会肖像。",
  },
  {
    title: "温床之一",
    year: "2005",
    category: "memory",
    categoryName: "记忆与日常",
    image: "/assets/works/wenchuang-zhiyi-2005.jpg",
    description:
      "亲密空间与人物状态被放在同一张画布里，日常成为历史的细部。",
  },
  {
    title: "合作",
    year: "1991",
    category: "site",
    categoryName: "现场项目",
    image: "/assets/works/hezuo-1991.jpg",
    description:
      "震后场景中的人被安置在未完成的现实里，画面沉默却不抽离。",
  },
  {
    title: "吼声",
    year: "2021",
    category: "site",
    categoryName: "现场项目",
    image: "/assets/works/housheng-2021.jpg",
    description: "湖区、人物与环境共同构成一个正在变化的现场。",
  },
  {
    title: "父子",
    year: "1989",
    category: "portrait",
    categoryName: "人物肖像",
    image: "/assets/works/fuzi-1989.jpg",
    description:
      "亲友、工人、青年与陌生人被置于同一现实光线中，构成开放的群像。",
  },
];

const slides = [
  {
    title: "少年通天",
    detail: "《河东，河西》展览作品，2025",
    image: "/assets/works/shaonian-tongtian-2025.jpg",
  },
  {
    title: "雪光",
    detail: "《河东，河西》展览作品，2025",
    image: "/assets/works/xueguang-2025.jpg",
  },
  {
    title: "吼声",
    detail: "《河东，河西》展览作品，2021",
    image: "/assets/works/housheng-2021.jpg",
  },
];

const timeline = [
  ["1963", "出生于辽宁金城", "东北工业城镇的成长经验，成为他后来反复回望的现实底色。"],
  ["1980", "进入中央美术学院附中学习", "学院训练让他建立起扎实的造型能力，也让写生和现实观察成为长期方法。"],
  ["1988", "毕业于中央美术学院油画系", "油画训练为其人物造型、空间组织与现场写生能力奠定基础。"],
  ["2004", "《三峡新移民》与大型现场经验", "三峡工程带来的迁徙、建设和地貌变化进入绘画。"],
  ["2025", "“刘小东：河东，河西”回顾展", "展览系统梳理其从学院训练到大型现场项目的创作脉络。"],
];

const filters = [
  ["all", "全部"],
  ["site", "现场项目"],
  ["portrait", "人物肖像"],
  ["memory", "记忆与故乡"],
] as const;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);

  const visibleWorks = useMemo(
    () =>
      activeFilter === "all"
        ? works
        : works.filter((work) => work.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="返回顶部">
            <strong>刘小东</strong>
            <span>Liu Xiaodong</span>
          </a>
          <div className="nav-links">
            <a href="#works">作品</a>
            <a href="#practice">创作</a>
            <a href="#timeline">年表</a>
            <a href="#visit">参观</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="刘小东艺术作品展首屏">
          <div className="hero-inner">
            <div className="kicker">现实现场 · 绘画项目 · 人物肖像</div>
            <h1>刘小东</h1>
            <div className="hero-copy">
              <p>
                他把画架带到真实的地点：工地、河岸、震后城市、故乡街巷与远方人群。
                画面中的人物不是戏剧角色，而是在时代现场中短暂停留的普通人。
              </p>
              <div className="hero-stats" aria-label="艺术家信息">
                <div>
                  <strong>1963</strong>
                  <span>出生于辽宁金城</span>
                </div>
                <div>
                  <strong>CAFA</strong>
                  <span>中央美术学院体系</span>
                </div>
                <div>
                  <strong>现场</strong>
                  <span>写生、影像与档案</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="wrap">
          <div className="section-head reveal">
            <h2>作品索引</h2>
            <p>
              这里以项目与主题组织刘小东的代表性创作线索，作品图片来自公开画廊资源页面。
              获得授权后，可以继续替换为更高清的正式图档。
            </p>
          </div>

          <div className="filters reveal" aria-label="作品筛选">
            {filters.map(([key, label]) => (
              <button
                className="filter"
                type="button"
                key={key}
                aria-pressed={activeFilter === key}
                onClick={() => setActiveFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="works-grid">
            {visibleWorks.map((work) => (
              <article className="work-card reveal" key={work.title}>
                <img className="painting" src={work.image} alt={`${work.title}，${work.year}`} />
                <div className="work-body">
                  <div className="work-meta">
                    <span>{work.categoryName}</span>
                    <span>{work.year}</span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <a
                    className="source-link"
                    href="https://taikangartmuseum.com/zh/archive_exhibitions/liu-xiaodong/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    图片来源：泰康美术馆
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="practice" className="essay">
          <div className="wrap">
            <div className="essay-aside">
              <h2 className="reveal">创作方法</h2>
              <div className="practice-video reveal">
                <div className="practice-video-frame">
                  <video
                    src="https://taikangartmuseum.com/wp-content/uploads/2026/01/刘小东纪录片.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="practice-video-caption">一分钟访谈影像节选 · 静音自动播放</div>
              </div>
            </div>
            <div className="essay-list">
              {[
                ["01", "把画架放进现实", "地点不是背景，而是人物命运与时代变化发生的位置。"],
                ["02", "在绘画之外建立档案", "日记、照片、影像和访谈让作品成为一个项目。"],
                ["03", "现实主义的当代温度", "注意力被放回具体的人、天气、等待与疲惫。"],
              ].map(([number, title, text]) => (
                <article className="essay-item reveal" key={number}>
                  <strong>{number}</strong>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band">
          <div className="feature">
            <div className="feature-art carousel" aria-label="河东河西系列轮播">
              <div className="carousel-track">
                {slides.map((slide, index) => (
                  <figure
                    className={`carousel-slide ${index === activeSlide ? "is-active" : ""}`}
                    key={slide.title}
                  >
                    <img src={slide.image} alt={slide.title} />
                    <figcaption className="carousel-caption">
                      <strong>{slide.title}</strong>
                      <span>{slide.detail}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-button"
                  type="button"
                  aria-label="上一张"
                  onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}
                >
                  ‹
                </button>
                <button
                  className="carousel-button"
                  type="button"
                  aria-label="下一张"
                  onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
                >
                  ›
                </button>
              </div>
              <div className="carousel-dots" aria-label="轮播分页">
                {slides.map((slide, index) => (
                  <button
                    className={`carousel-dot ${index === activeSlide ? "is-active" : ""}`}
                    type="button"
                    aria-label={`第 ${index + 1} 张`}
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
            <div className="feature-text">
              <h2>河东，河西</h2>
              <div className="quote">
                系列作品可以继续扩展：加入更多授权图后，轮播会按顺序切换。
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="wrap">
          <div className="section-head reveal">
            <h2>艺术年表</h2>
            <p>
              从学院训练到大型现场项目，刘小东持续把绘画推向真实世界，
              也让现实主义在当代语境中保持开放的生命力。
            </p>
          </div>
          <div className="timeline">
            {timeline.map(([year, title, text]) => (
              <article className="time-row reveal" key={year}>
                <strong>{year}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="wrap visit-panel">
            <h2 className="reveal">观看一位画家如何把时代画成人。</h2>
            <div className="visit-info reveal">
              <p>首页已经迁移到 Next.js，可以继续扩展作品数据、详情页和后台内容来源。</p>
              <a className="visit-link" href="#works">
                回到作品索引
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>刘小东艺术作品展示 · Next.js 版本</span>
          <span>作品图片来源：泰康美术馆与公开页面。</span>
        </div>
      </footer>
    </>
  );
}
