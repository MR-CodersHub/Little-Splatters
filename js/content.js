/**
 * LITTLE SPLATTERS — DETAIL PAGE CONTENT STORE
 * Unique article + class content keyed by URL slug (?post= / ?service=)
 */
'use strict';

const AUTHORS = {
  sarah: { name: 'Ms. Sarah Chen', role: 'Watercolour & Drawing Specialist', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', bio: 'Sarah holds a Master\u2019s in Art Education and has taught children\u2019s art for 8 years. She specialises in watercolour and child-centred creative development.' },
  priya: { name: 'Ms. Priya Sharma', role: 'Crafts & Mixed Media Lead', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', bio: 'Priya leads our crafts and mixed media programme with 6 years of experience turning everyday materials into extraordinary young-artist projects.' },
  lucas: { name: 'Mr. Lucas Martin', role: 'Advanced Studio Instructor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', bio: 'Lucas coaches our advanced artists aged 13\u201316 in portfolio development, illustration and competition preparation, with 10 years of studio teaching.' },
  james: { name: 'Mr. James Okoye', role: 'Canvas & Acrylic Specialist', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', bio: 'James brings 12 years of painting practice to the studio, specialising in acrylics, canvas work, and helping young artists paint with bold confidence.' }
};

/* ============================================================
   BLOG POSTS
   ============================================================ */
const BLOG_POSTS = {
  'art-education-gift': {
    title: 'Why Art Education is the Most Important Gift We Can Give Our Children',
    label: 'Featured Story', category: 'Art Education', tags: ['Art Education', 'Child Development', 'Creativity'],
    author: 'sarah', date: 'October 1, 2026', readTime: '8 min read',
    image: 'https://i.pinimg.com/736x/97/c4/c0/97c4c092a91e16b1a26675585d6357b6.jpg',
    alt: 'Children creating colourful artwork together at Little Splatters',
    excerpt: 'In a world increasingly dominated by screens and structured learning, art remains one of the few spaces where children can truly be themselves.',
    body: `<p>In a world increasingly dominated by screens, structured testing, and prescribed outcomes, art remains one of the last true spaces where children can be entirely themselves. No wrong answers. No pass or fail. Just the profound, joyful experience of making something from nothing.</p><p>As art educators, we see this transformation every single day. A five-year-old who arrives too shy to even say their name becomes, over weeks, a child who boldly fills a canvas with colour. These are not small moments. They are life-changing.</p><h3>The Science Behind Art Education</h3><p>Studies by the National Endowment for the Arts demonstrate that children who engage regularly in arts education are four times more likely to be recognised for academic achievement and significantly more likely to develop strong social and problem-solving skills.</p><ul><li>Four times more likely to be recognised for academic achievement</li><li>Stronger creative self-efficacy and problem-solving</li><li>Improved emotional regulation and empathy</li><li>A powerful language for feelings words cannot capture</li></ul><div class="highlight-box coral" style="margin:28px 0;"><h4 style="margin-bottom:8px;">\u201CCreativity is not a talent. It\u2019s a way of operating.\u201D \u2014 John Cleese</h4><p style="font-size:0.9rem;">Like any skill, creative thinking improves dramatically with regular practice in the right environment.</p></div><p>At Little Splatters, we train our instructors not just in art techniques but in child psychology and the art of encouraging without directing \u2014 asking \u201CTell me about your painting\u201D rather than \u201CWhat is it?\u201D</p>`
  },
  'drawing-exercises-30-days': {
    title: '10 Drawing Exercises That Transform Young Artists in 30 Days',
    label: 'Drawing Tips', category: 'Drawing Tips', tags: ['Drawing', 'Practice', 'Kids Activities'],
    author: 'sarah', date: 'September 28, 2026', readTime: '5 min read',
    image: 'https://i.pinimg.com/736x/d8/3e/04/d83e04d62b6d229a8a993a556be062e9.jpg',
    alt: 'Child practising daily drawing exercises at home',
    excerpt: 'Simple daily exercises that any parent can guide at home \u2014 no art experience needed. Watch confidence and skill grow week by week.',
    body: `<p>You do not need to be an artist to help your child learn to draw \u2014 you just need ten minutes a day and a willingness to doodle alongside them. These ten exercises build observation, control and confidence in one month.</p><p>Start with straight lines and circles, then move to contour drawing (drawing without looking at the paper), gesture sketches of family pets, shading gradients, and copying one small section of a favourite illustration each week.</p><h3>The 30-Day Plan</h3><ul><li>Week 1: lines, circles, and pressure control with any pencil</li><li>Week 2: blind contour drawings \u2014 funny results, serious observation skills</li><li>Week 3: shading gradients and simple 3D shapes like spheres and cubes</li><li>Week 4: draw the same toy from three different angles</li></ul><p>Praise effort and observation, never accuracy. Date every drawing and keep them in a folder \u2014 flipping back through thirty days of progress is the most powerful motivator a young artist can experience.</p>`
  },
  'art-corner-home': {
    title: 'How to Set Up the Perfect Art Corner at Home for Your Child',
    label: 'Parent Guide', category: 'Parent Guide', tags: ['Parent Guide', 'Home Setup', 'Kids Activities'],
    author: 'priya', date: 'September 22, 2026', readTime: '7 min read',
    image: 'https://i.pinimg.com/736x/74/50/94/7450941e01fa35d41ab8f1a99775faef.jpg',
    alt: 'Bright dedicated art corner for children at home',
    excerpt: 'Creating a dedicated creative space at home \u2014 even a small one \u2014 dramatically increases how often children engage in art.',
    body: `<p>Children who have a dedicated creative space make art up to five times more often than those who must ask for supplies and clear the dinner table first. The good news: a perfect art corner needs only about one square metre.</p><p>Choose a spot with good daylight near a washable floor. A small table, a sturdy chair at the right height, and open trays \u2014 not closed boxes \u2014 so materials invite use. Rotate supplies monthly to keep curiosity alive.</p><h3>Art Corner Essentials</h3><ul><li>Washable markers, crayons, and a mixed paper pad</li><li>A wipeable mat or old shower curtain under the table</li><li>Open jars for brushes and a water pot with a wide base</li><li>A display rail or string with pegs for finished work</li></ul><p>Total cost can stay under $40 with second-hand furniture. The real investment is permission: let the corner be theirs, let it get messy, and watch what happens.</p>`
  },
  'teen-portfolio-guide': {
    title: 'Building an Art Portfolio for Your Teenager: A Step-by-Step Guide',
    label: 'Teen Art', category: 'Teen Art', tags: ['Teen Art', 'Portfolio', 'Parent Guide'],
    author: 'lucas', date: 'September 15, 2026', readTime: '6 min read',
    image: 'https://i.pinimg.com/1200x/48/16/00/481600c07a035dbf6bbc22400d5ad299.jpg',
    alt: 'Teenager organising a portfolio of artwork',
    excerpt: 'Whether for school applications, competitions, or personal expression \u2014 help your teen build a strong, diverse art portfolio.',
    body: `<p>A strong teen portfolio is not a pile of pretty pictures \u2014 it is evidence of thinking. Schools and competition judges look for range, observation, experimentation, and above all a developing personal voice.</p><p>Aim for 12\u201315 finished pieces across at least three mediums, plus a sketchbook showing process: thumbnails, failed attempts, colour tests, and notes. Process pages often impress judges more than finished work.</p><h3>Portfolio Checklist</h3><ul><li>Observational drawings: still life, portraits, and environments from life</li><li>One sustained project developed over several weeks</li><li>Evidence of experimentation \u2014 mixed media, scale, or unusual materials</li><li>Clean photographs: daylight, no flash, cropped edges, neutral background</li></ul><p>Start a year before any deadline. Our Advanced Studio programme builds portfolios term by term, so nothing is ever rushed in the final month.</p>`
  },
  'colour-mixing-basics': {
    title: 'Colour Mixing Basics Every Young Painter Should Know',
    label: 'Painting Tips', category: 'Painting Tips', tags: ['Painting', 'Colour Theory', 'Kids Activities'],
    author: 'sarah', date: 'September 8, 2026', readTime: '5 min read',
    image: 'https://i.pinimg.com/736x/ac/ca/2f/acca2fd176e836c5ec9fd0d9acccfd12.jpg',
    alt: 'Child mixing bright paint colours on a palette',
    excerpt: 'Primary colours, magical secondaries and muddy-brown rescues \u2014 fun mixing games that teach real colour theory without a worksheet.',
    body: `<p>Every young painter asks the same magical question: \u201Chow do I make green?\u201D Colour mixing is chemistry children can see, and it starts with just red, yellow, blue \u2014 plus white.</p><p>Teach the game \u201Cone colour at a time\u201D: add tiny touches of the second colour and watch orange, green and purple appear. Then comes the great rescue lesson \u2014 every muddy brown can become a tree trunk, soil, or shadow with one confident decision.</p><h3>Try These Mixing Games</h3><ul><li>Mystery colour: mix with eyes closed, then find it in the room</li><li>Shade ladder: one colour plus increasing white, five steps</li><li>Skin-tone lab: every family member mixes their own tone</li><li>Rescue challenge: turn an accidental brown into a finished mini-painting</li></ul><p>Keep a \u201Cmixing diary\u201D page in the sketchbook \u2014 dabs of each discovery with its recipe. Young colourists treasure these pages for years.</p>`
  },
  'watercolour-techniques': {
    title: '5 Gentle Watercolour Techniques Kids Pick Up in One Class',
    label: 'Watercolour', category: 'Watercolour', tags: ['Watercolour', 'Painting', 'Techniques'],
    author: 'sarah', date: 'August 30, 2026', readTime: '6 min read',
    image: 'https://i.pinimg.com/736x/30/88/11/308811fce4d77c05216301b6545925e0.jpg',
    alt: 'Child painting soft watercolour washes',
    excerpt: 'Wet-on-wet skies, salty textures and wax-resist surprises \u2014 simple techniques with gallery-worthy results for ages 6 and up.',
    body: `<p>Watercolour looks delicate but forgives beautifully \u2014 there is almost no mistake that water, patience, or a paper towel cannot soften. These five techniques all succeed on the very first try.</p><p>Wet-on-wet skies melt colour into clouds. Wax-resist secrets appear like magic when wash flows over crayon. Salt sprinkled on damp paint blooms into frost and stars. Lifting with a thirsty brush carves moonlight from darkness.</p><h3>One-Class Wins</h3><ul><li>Graded wash: dark to light in one confident sweep</li><li>Wet-on-wet sunset with two colours and a paper towel sun</li><li>Salt-textured night sky over a silhouetted hill</li><li>Wax-resist fish hiding in a blue ocean wash</li></ul><p>Use proper 300gsm watercolour paper \u2014 it is the single biggest difference between frustration and joy. Then let the water do half the painting.</p>`
  },
  'sketch-habit': {
    title: 'The 10-Minute Daily Sketch Habit That Builds Brave Creators',
    label: 'Creativity', category: 'Creativity', tags: ['Sketching', 'Habits', 'Creativity'],
    author: 'sarah', date: 'August 22, 2026', readTime: '4 min read',
    image: 'https://i.pinimg.com/1200x/39/3c/79/393c792b8225195a9ee22099a83b6a1f.jpg',
    alt: 'Child sketching daily in a sketchbook',
    excerpt: 'No erasers, no pressure \u2014 just ten playful minutes a day. The routine our instructors recommend to every family.',
    body: `<p>Ten minutes beats two hours on Saturday. A tiny daily sketch habit trains the hand, sharpens observation, and \u2014 most importantly \u2014 teaches children that creating is simply what they do, not a special event.</p><p>The rules make it work: same time, same tiny sketchbook, pen only with no eraser. Prompts remove the fear of the blank page \u2014 draw your breakfast, your shoe, five circles turned into faces.</p><h3>Making It Stick</h3><ul><li>Anchor it to an existing routine, like right after breakfast</li><li>Parents sketch too \u2014 modelling beats nagging every time</li><li>Date each page; review the month together and celebrate growth</li><li>Never correct \u2014 curiosity and consistency matter, not likeness</li></ul><p>Within a month you will see braver lines, faster decisions, and a child who reaches for a pencil the way others reach for a screen.</p>`
  },
  'recycling-makes': {
    title: 'Brilliant Art From the Recycling Bin: 8 Weekend Makes',
    label: 'Crafts', category: 'Crafts', tags: ['Crafts', 'Recycling', 'Weekend'],
    author: 'priya', date: 'August 14, 2026', readTime: '7 min read',
    image: 'https://i.pinimg.com/1200x/92/6d/34/926d340c168228859c2938e135efbfae.jpg',
    alt: 'Colourful crafts made from recycled materials',
    excerpt: 'Cardboard, jars and old magazines become sculptures, collages and puppets \u2014 eco-friendly creativity the whole family enjoys.',
    body: `<p>The best art supply shop is your recycling bin. Cardboard is rigid, free, and gloriously forgiving \u2014 perfect for young makers who think big. Add jars, bottle caps, magazines and fabric scraps and you have a studio.</p><p>Start structural: cardboard robots, marble runs, and shadow-puppet theatres. Then go decorative: tin-can pen holders, magazine-strip bowls, and cap mosaics. Finish with wearable art \u2014 cereal-box crowns and robot cuffs.</p><h3>Weekend Make List</h3><ul><li>Cardboard city with fold-and-slot buildings</li><li>Jar lanterns with tissue-paper stained glass</li><li>Magazine mosaic animals on cereal-box board</li><li>Bottle-cap memory game with painted pairs</li></ul><p>Keep a dedicated \u201Cmaker box\u201D for clean recyclables, supervise cutting tools by age, and photograph everything \u2014 cardboard masterpieces rarely survive the month, and that is fine.</p>`
  },
  'choosing-class': {
    title: 'Drawing vs Painting vs Crafts: Which Class Suits Your Child?',
    label: 'Parent Guide', category: 'Parent Guide', tags: ['Parent Guide', 'Classes', 'Advice'],
    author: 'sarah', date: 'August 5, 2026', readTime: '8 min read',
    image: 'https://i.pinimg.com/736x/a7/31/82/a731826b691c36ffeab1a17153c18c1f.jpg',
    alt: 'Parent and child choosing between art class options',
    excerpt: 'A practical parent\u2019s guide to matching your child\u2019s age, temperament and interests with the perfect first art class.',
    body: `<p>Choosing a first art class feels high-stakes, but the stakes are joyfully low: every medium builds the same creative confidence, and children can switch freely between terms. Match the class to the child, not the ambition.</p><p>Detail-loving observers thrive in drawing. Sensory, big-movement children bloom in painting. Builders and fidgeters come alive in crafts. Teens seeking identity pour themselves into mixed media and portfolio work.</p><h3>Quick Matching Guide</h3><ul><li>Ages 4\u20136: sensory crafts and doodling \u2014 short sessions, maximum mess</li><li>Ages 7\u20139: drawing foundations plus watercolour play</li><li>Ages 10\u201312: acrylics, canvas, and technique with real vocabulary</li><li>Ages 13+: portfolio, mixed media, and self-directed projects</li></ul><p>Still unsure? Book a free trial and tell us what your child loves doing at home \u2014 we will point you to the perfect fit within one session.</p>`
  },
  'competitions-judges': {
    title: 'Winning Young Artist Competitions: What Judges Really Look For',
    label: 'Competitions', category: 'Competitions', tags: ['Competitions', 'Teen Art', 'Tips'],
    author: 'lucas', date: 'July 28, 2026', readTime: '6 min read',
    image: 'https://i.pinimg.com/736x/c9/0c/76/c90c76052b3902e8396bed30d385244b.jpg',
    alt: 'Young artist prize-winning artwork on display',
    excerpt: 'Originality beats perfection every time. Insider tips from years of coaching young competition winners.',
    body: `<p>After judging dozens of youth competitions, I can tell you the secret: judges reward thinking, not polish. A strange, heartfelt, imperfectly painted idea beats a technically perfect copy every single time.</p><p>Read the theme three times and answer it sideways \u2014 the oblique response stands out among fifty literal ones. Present flawlessly: clean edges, neutral mount, honest artist statement in the child\u2019s own words.</p><h3>Judge-Proof Checklist</h3><ul><li>Original idea first \u2014 skill second, always</li><li>Artist statement written by the child, 50 honest words</li><li>Photograph or scan at high resolution before submitting</li><li>Enter the right age category \u2014 never \u201Cup\u201D for prestige</li></ul><p>Win or lose, every entry becomes a portfolio piece and a story. Celebrate the courage of entering \u2014 that is the real prize.</p>`
  },
  'talk-about-art': {
    title: 'How to Talk to Your Child About Their Art (Without Saying "What Is It?")',
    label: 'Parent Guide', category: 'Parent Guide', tags: ['Parenting', 'Confidence', 'Communication'],
    author: 'sarah', date: 'September 8, 2026', readTime: '9 min read',
    image: 'https://i.pinimg.com/736x/f3/f3/c2/f3f3c2f7953fe62becde8583e29d631c.jpg',
    alt: 'Parent admiring a child\u2019s colourful artwork',
    excerpt: 'The words we use when children share their art matter enormously. Respond in ways that build confidence and genuine artistic thinking.',
    body: `<p>\u201CWhat is it?\u201D is the most deflating question in art \u2014 it tells the child their work failed to communicate. Replace it with observation: \u201CI notice swirling blue lines and a bright red shape \u2014 tell me about this part.\u201D</p><p>Praise process over product: \u201CYou mixed a brand-new green here\u201D beats \u201Cbeautiful!\u201D every time. Specific noticing proves you truly looked, and looking is love made visible.</p><h3>Phrases That Build Artists</h3><ul><li>\u201CTell me the story of this painting\u201D instead of \u201CWhat is it?\u201D</li><li>\u201CI can see you worked hard on these details\u201D</li><li>\u201CWhat would you try differently next time?\u201D</li><li>\u201CWhere shall we display this?\u201D \u2014 then actually display it</li></ul><p>When children feel their creative voice is respected at home, they bring braver ideas to every class. Your words are their first gallery.</p>`
  },
  'buying-supplies': {
    title: 'The Parent\u2019s Complete Guide to Buying Art Supplies for Kids',
    label: 'Buying Guide', category: 'Buying Guide', tags: ['Supplies', 'Parent Guide', 'Budget'],
    author: 'priya', date: 'August 30, 2026', readTime: '6 min read',
    image: 'https://i.pinimg.com/736x/b1/42/d4/b142d4a74ce87814a0b7c1e65ae969a5.jpg',
    alt: 'Quality art supplies arranged for children',
    excerpt: 'Don\u2019t waste money on bad art materials that frustrate young artists. Exactly what to buy for each age group at every budget.',
    body: `<p>Cheap supplies are the most expensive mistake in children\u2019s art. Scratchy brushes, waxy \u201Cwashable\u201D paints and feathering paper teach children that art is struggle \u2014 when the fault lies with the tools, not the talent.</p><p>Spend first on paper: thick, mixed-media pads transform every medium. Next, a twelve-pan student watercolour set and two decent round brushes. Add washable tempera for under-sevens and a fineliner set for older sketchers.</p><h3>Spend vs Save</h3><ul><li>Spend: heavyweight paper, one good watercolour set, real brushes</li><li>Save: pencils, erasers, palettes, water pots, aprons</li><li>Avoid: 100-colour bargain marker tubs and glitter glue everything</li><li>Budget starter kit that lasts a year: under $35 total</li></ul><p>At Little Splatters every material is studio-provided \u2014 but for home practice, this short list covers 90% of joyful making.</p>`
  },
  'art-wellbeing': {
    title: 'Art & Emotional Wellbeing: How Creative Expression Supports Your Child\u2019s Mental Health',
    label: 'Wellbeing', category: 'Wellbeing', tags: ['Wellbeing', 'Mental Health', 'Research'],
    author: 'sarah', date: 'August 22, 2026', readTime: '7 min read',
    image: 'https://i.pinimg.com/736x/9a/4e/51/9a4e516b5cda2eb7b7287f26516d5033.jpg',
    alt: 'Calm child painting peacefully for emotional wellbeing',
    excerpt: 'Research shows regular art-making significantly reduces anxiety and builds emotional resilience in children.',
    body: `<p>When words fail, colour speaks. Studies in expressive-arts research consistently show that regular creative sessions lower cortisol, ease anxiety, and give children a safe container for big feelings \u2014 no artistic talent required.</p><p>The mechanism is beautifully simple: rhythmic mark-making calms the nervous system, open-ended creating restores a sense of control, and finishing something tangible rebuilds self-worth on difficult days.</p><h3>Wellbeing Art at Home</h3><ul><li>Mandala colouring together for ten calm minutes before bed</li><li>\u201CWeather report\u201D paintings: paint today\u2019s feeling as weather</li><li>Worry monsters: draw worries, then paint over them with courage colours</li><li>Keep it process-only \u2014 no display pressure, no judgement</li></ul><p>If your child is struggling, art complements \u2014 never replaces \u2014 professional support. Our studio is a joyful, pressure-free space where every feeling is welcome on the page.</p>`
  }
};

/* ============================================================
   BLOG DETAILS RENDERER (?post=slug)
   ============================================================ */
const BlogDetails = {
  DEFAULT_SLUG: 'art-education-gift',

  init() {
    if (!document.getElementById('article-h1')) return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('post') || this.DEFAULT_SLUG;
    const post = BLOG_POSTS[slug] || BLOG_POSTS[this.DEFAULT_SLUG];
    const author = AUTHORS[post.author] || AUTHORS.sarah;

    document.title = post.title + ' | Little Splatters \u2014 Where Every Child Creates';

    const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

    setText('crumb-title', post.title.length > 42 ? post.title.slice(0, 42) + '\u2026' : post.title);
    setHTML('article-label', '<i class="fa-solid fa-star" aria-hidden="true"></i> ' + post.label);
    setText('article-h1', post.title);
    setText('article-author-name', author.name);
    setText('article-date', post.date + ' \u00B7 ' + post.readTime);
    setHTML('article-badges', '<span class="badge badge-coral">' + post.category + '</span>' +
      post.tags.slice(1, 3).map(t => '<span class="badge badge-blue">' + t + '</span>').join(''));

    const heroImg = document.getElementById('article-feature-img');
    if (heroImg) { heroImg.src = post.image; heroImg.alt = post.alt; heroImg.setAttribute('referrerpolicy', 'no-referrer'); }
    const authorImg = document.getElementById('article-author-img');
    if (authorImg) { authorImg.src = author.avatar; authorImg.alt = 'Author ' + author.name; }

    setHTML('article-body', post.body);

    const sImg = document.getElementById('sidebar-author-img');
    if (sImg) { sImg.src = author.avatar; sImg.alt = author.name; }
    setText('sidebar-author-name', author.name);
    setText('sidebar-author-role', author.role);
    setText('sidebar-author-bio', author.bio);
    setHTML('sidebar-tags', post.tags.map((t, i) =>
      '<span class="badge badge-' + ['coral', 'blue', 'yellow', 'mint'][i % 4] + '">' + t + '</span>').join(''));

    this.renderRelated(slug, post);
  },

  renderRelated(currentSlug, post) {
    const grid = document.getElementById('related-grid');
    if (!grid) return;
    const others = Object.entries(BLOG_POSTS)
      .filter(([s]) => s !== currentSlug)
      .sort(([a], [b]) => {
        const ac = BLOG_POSTS[a].category === post.category ? 0 : 1;
        const bc = BLOG_POSTS[b].category === post.category ? 0 : 1;
        return ac - bc;
      })
      .slice(0, 3);
    grid.innerHTML = others.map(([slug, p]) =>
      '<article class="blog-card">' +
        '<div class="blog-card-img-wrap">' +
          '<img src="' + p.image + '" alt="' + p.alt + '" class="blog-card-img" loading="lazy" width="400" height="225" referrerpolicy="no-referrer">' +
          '<div class="blog-card-category"><span class="badge badge-coral">' + p.category + '</span></div>' +
        '</div>' +
        '<div class="blog-card-body">' +
          '<div class="blog-card-date"><i class="fa-solid fa-calendar-days" aria-hidden="true"></i> ' + p.date + '</div>' +
          '<h3 class="blog-card-title">' + p.title + '</h3>' +
          '<p class="blog-card-excerpt">' + p.excerpt + '</p>' +
          '<a href="blog-details.html?post=' + slug + '" class="blog-card-read-more">Read More \u2192</a>' +
        '</div>' +
      '</article>').join('');
  }
};

document.addEventListener('DOMContentLoaded', () => BlogDetails.init());

/* ============================================================
   SERVICES (?service=slug)
   ============================================================ */
const PROJECT_POOL = [
  { img: 'https://i.pinimg.com/1200x/83/fd/1c/83fd1ca6c0583b949be1ea5643a03f88.jpg', alt: 'Student sunset painting' },
  { img: 'https://i.pinimg.com/1200x/28/7c/73/287c73bdfed3afe3644a0898419bbea4.jpg', alt: 'Student watercolour artwork' },
  { img: 'https://i.pinimg.com/736x/66/34/b9/6634b91f162acdb7fb576228317d97ad.jpg', alt: 'Student pencil drawing' },
  { img: 'https://i.pinimg.com/736x/5f/70/b2/5f70b2bd1b61f0116ab760324b28c497.jpg', alt: 'Student canvas painting' },
  { img: 'https://i.pinimg.com/1200x/ff/c4/14/ffc414022e2d0df6c138d45de1ceddea.jpg', alt: 'Student paper craft' },
  { img: 'https://i.pinimg.com/1200x/6f/0f/6b/6f0f6b97f676e0ca190b0a5446b9f4e8.jpg', alt: 'Student abstract painting' },
  { img: 'https://i.pinimg.com/1200x/a6/19/f8/a619f8ef2676a017719ec2aebb055055.jpg', alt: 'Student watercolour landscape' },
  { img: 'https://i.pinimg.com/736x/c1/de/3a/c1de3ae3c2cca16a4cacc22778b278f7.jpg', alt: 'Student pencil portrait' }
];

const SERVICES = {
  'kids-drawing': {
    name: 'Kids Drawing Classes', label: 'Drawing', ages: '4\u201316 years', duration: '60 min', classSize: 'Max 8', schedule: 'Weekly', price: '$24', monthly: '$89', level: 'All levels', instructor: 'sarah',
    image: 'https://i.pinimg.com/1200x/71/53/96/715396161a4a02b6991d40a5bbaff054.jpg', alt: 'Colour landscape drawing from Kids Drawing Classes',
    intro: 'Build foundational drawing skills through lines, shapes, shading, and composition \u2014 guided by experienced art educators.',
    overview: ['Kids Drawing Classes take children from first marks to confident, expressive drawing. Every session blends playful warm-ups with real technique, so progress always feels like play.', 'Students explore line, shape, value, texture, and composition across pencil, charcoal, ink, and pastel \u2014 building a sketchbook they are proud of term by term.'],
    highlight: { icon: 'fa-pencil', title: 'Why Drawing First?', text: 'Drawing is the foundation of all visual art. Children who draw confidently paint, sculpt, and design with far greater freedom.' },
    learnings: ['Confident line work: straight, curved, and expressive marks', 'Shapes, proportions, and simple perspective', 'Shading gradients and light-and-shadow basics', 'Texture techniques with pencil, charcoal, and ink', 'Composition: arranging subjects on the page', 'A personal sketchbook habit that grows weekly'],
    materials: [{ icon: 'fa-pencil', name: 'Sketch Pencils', desc: 'Graphite sets from 2H to 8B for every technique' }, { icon: 'fa-book-open', name: 'Sketchbooks', desc: 'Heavyweight personal sketchbooks for each student' }, { icon: 'fa-pen-nib', name: 'Ink & Charcoal', desc: 'Fineliners, willow charcoal, and blending stumps' }, { icon: 'fa-eraser', name: 'Erasers & Tools', desc: 'Kneaded erasers, sharpeners, and rulers' }],
    scheduleLines: ['<strong>Wednesday 4:00\u20135:00pm</strong> \u00B7 Ages 4\u20138', '<strong>Saturday 11:00am\u201312:00pm</strong> \u00B7 Ages 9\u201316'],
    testimonial: { text: 'My son went from stick figures to shaded portraits in one term. His drawing folder is our family treasure now!', name: 'Daniel R.', role: 'Parent of Noah, age 8' },
    outcomes: [{ icon: 'fa-pencil', title: 'Real Technique', text: 'Genuine drawing skills \u2014 line, value, and proportion they keep for life.' }, { icon: 'fa-eye', title: 'Sharp Observation', text: 'Children learn to truly see: edges, angles, light, and detail.' }, { icon: 'fa-fire', title: 'Daily Confidence', text: 'A sketchbook habit that turns practice into pride.' }],
    projects: ['Sunset Valley Landscape', 'My Favourite Toy Study', 'Pattern & Texture Tiles', 'Story Scene Illustration'],
    faqExtra: [{ q: 'Does my child need drawing experience?', a: 'None at all! Beginners start with playful mark-making games while experienced young artists refine shading and perspective from day one.' }],
    ctaTitle: 'Try Kids Drawing \u2014 Free!'
  },
  'painting-classes': {
    name: 'Painting Classes', label: 'Painting', ages: '5\u201316 years', duration: '75 min', classSize: 'Max 8', schedule: 'Weekly', price: '$32', monthly: '$115', level: 'All levels', instructor: 'sarah',
    image: 'https://i.pinimg.com/736x/dd/a3/72/dda372397dbe94128bdd71c8bba1e7f1.jpg', alt: 'Floral seascape painting from Painting Classes',
    intro: 'Watercolours, acrylics, and poster paints come alive as children explore colour mixing, brush techniques, and creative storytelling.',
    overview: ['Painting Classes are pure colour joy. Children journey from first watercolour washes to bold acrylic statements, learning how paint behaves \u2014 and how to make it obey.', 'Each term explores a new theme, from landscapes and seascapes to animals and abstract expression, so young painters build range alongside skill.'],
    highlight: { icon: 'fa-palette', title: 'Colour Confidence', text: 'Mixing, layering, and brushwork taught step by step \u2014 children stop fearing the blank canvas within weeks.' },
    learnings: ['Colour mixing: primaries, secondaries, tints, and shades', 'Brush techniques: washes, dry-brush, stippling, and glazing', 'Watercolour, acrylic, and poster-paint handling', 'Painting from observation and imagination', 'Simple compositions with foreground and background', 'Caring for brushes, palettes, and finished work'],
    materials: [{ icon: 'fa-palette', name: 'Acrylic & Tempera', desc: 'Vibrant, non-toxic paints in every colour' }, { icon: 'fa-paintbrush', name: 'Brush Sets', desc: 'Round, flat, and fan brushes for all techniques' }, { icon: 'fa-file-lines', name: 'Boards & Paper', desc: 'Canvas boards, mixed-media pads, and easels' }, { icon: 'fa-shirt', name: 'Aprons & Cover', desc: 'Smocks and table cover \u2014 mess welcome!' }],
    scheduleLines: ['<strong>Monday 4:00\u20135:15pm</strong> \u00B7 Ages 5\u20139', '<strong>Saturday 1:00\u20132:15pm</strong> \u00B7 Ages 10\u201316'],
    testimonial: { text: 'My daughter\u2019s bedroom wall is now her gallery. Every painting comes home finished, vibrant, and proudly signed!', name: 'Rachel M.', role: 'Parent of Emma, age 10' },
    outcomes: [{ icon: 'fa-palette', title: 'Painterly Skill', text: 'Real control of colour, brush, and paint behaviour.' }, { icon: 'fa-book-open', title: 'Art Storytelling', text: 'Paintings that tell stories, not just pictures.' }, { icon: 'fa-image', title: 'Framable Work', text: 'Finished pieces the whole family displays proudly.' }],
    projects: ['Sunset Seascape', 'Flower Meadow', 'My Pet Portrait', 'Abstract Emotions'],
    faqExtra: [{ q: 'Will my child ruin clothes with paint?', a: 'We use washable paints plus studio aprons, and we send home a mess-guide. Most paint washes out \u2014 and the joy definitely outweighs the laundry!' }],
    ctaTitle: 'Try Painting Classes \u2014 Free!'
  },
  'creative-crafts': {
    name: 'Creative Art & Crafts', label: 'Crafts', ages: '4\u201312 years', duration: '60 min', classSize: 'Max 8', schedule: 'Weekly', price: '$22', monthly: '$79', level: 'All levels', instructor: 'priya',
    image: 'https://i.pinimg.com/1200x/9c/0c/32/9c0c3272c97b94c577be45537772e9a3.jpg', alt: 'Paper butterfly craft from Creative Art and Crafts',
    intro: 'Paper sculpture, collage, clay, and mixed materials spark imagination and develop fine motor skills in a hands-on, messy-fun environment.',
    overview: ['Creative Art & Crafts is where little hands think big. Cutting, folding, sticking, squishing, and threading build the fine motor foundations every young child needs.', 'Projects rotate weekly \u2014 paper sculpture one week, clay pinch-pots the next \u2014 so there is always something new to carry home.'],
    highlight: { icon: 'fa-scissors', title: 'Hands That Think', text: 'Crafting builds focus, patience, and dexterity disguised as pure fun. Teachers notice the difference in handwriting within months.' },
    learnings: ['Safe scissor skills and paper folding techniques', 'Collage: tearing, layering, and texture play', 'Air-dry clay: pinch, coil, and slab basics', 'Printing with sponges, stamps, and found objects', 'Recycled-material building and junk modelling', 'Finishing, presenting, and gifting handmade work'],
    materials: [{ icon: 'fa-scissors', name: 'Child-Safe Tools', desc: 'Blunt-tip scissors, glue sticks, and tape' }, { icon: 'fa-layer-group', name: 'Paper Library', desc: 'Coloured, textured, and metallic papers' }, { icon: 'fa-cube', name: 'Clay & Dough', desc: 'Air-dry clay and modelling dough' }, { icon: 'fa-recycle', name: 'Maker Supplies', desc: 'Recycled bits, fabric, beads, and buttons' }],
    scheduleLines: ['<strong>Tuesday 3:30\u20134:30pm</strong> \u00B7 Ages 4\u20137', '<strong>Friday 4:00\u20135:00pm</strong> \u00B7 Ages 8\u201312'],
    testimonial: { text: 'My shy daughter bloomed here \u2014 she now confidently shares her handmade crafts at her school art show!', name: 'Priya S.', role: 'Parent of Aanya, age 7' },
    outcomes: [{ icon: 'fa-hands', title: 'Fine Motor Skill', text: 'Cutting, folding, and modelling strengthen growing hands.' }, { icon: 'fa-gift', title: 'Proud Makers', text: 'Weekly take-home treasures build generosity and pride.' }, { icon: 'fa-recycle', title: 'Resourceful Thinking', text: 'Everyday objects become art supplies.' }],
    projects: ['Quilled Butterfly', 'Clay Pinch-Pot Pets', 'Collage Storybook', 'Recycled Robot'],
    faqExtra: [{ q: 'Is crafts suitable for very young children?', a: 'Absolutely \u2014 it is designed for ages 4+. Activities are sensory, short, and mess-friendly, with patient instructors guiding every little hand.' }],
    ctaTitle: 'Try Art & Crafts \u2014 Free!'
  },
  'canvas-painting': {
    name: 'Canvas Painting', label: 'Canvas', ages: '8\u201316 years', duration: '90 min', classSize: 'Max 6', schedule: 'Weekly', price: '$38', monthly: '$135', level: 'Beginner to advanced', instructor: 'james',
    image: 'https://i.pinimg.com/1200x/ed/8d/ad/ed8dad8455495ac76b9daac3e23761a2.jpg', alt: 'Boy painting a beach scene on canvas easel',
    intro: 'Children paint stunning canvas masterpieces using acrylic and oil techniques \u2014 creating artwork they are truly proud to display at home.',
    overview: ['Canvas Painting is our gallery experience. Working upright at real easels, children plan, underpaint, layer, and varnish complete stretched-canvas artworks.', 'Inspired by art-history movements from Impressionism to street art, each term ends with a piece ready to hang \u2014 and a young artist standing taller.'],
    highlight: { icon: 'fa-image', title: 'Real Canvases, Real Pride', text: 'There is nothing like carrying home a full-size canvas. Students treat these sessions with wonderful seriousness \u2014 and joy.' },
    learnings: ['Canvas preparation: gesso, toning, and sketch transfer', 'Acrylic layering: underpainting to final glazes', 'Brush and palette-knife techniques', 'Colour palettes inspired by famous movements', 'Varnishing and presenting finished canvases', 'Artist statements: talking about your work'],
    materials: [{ icon: 'fa-image', name: 'Stretched Canvases', desc: 'Quality cotton canvases in multiple sizes' }, { icon: 'fa-palette', name: 'Acrylic Paints', desc: 'Professional acrylics with rich pigment' }, { icon: 'fa-paintbrush', name: 'Easel Brushes', desc: 'Long-handle brushes plus palette knives' }, { icon: 'fa-spray-can-sparkles', name: 'Varnish & Finish', desc: 'Protective varnish for gallery-ready work' }],
    scheduleLines: ['<strong>Thursday 4:30\u20136:00pm</strong> \u00B7 Ages 8\u201312', '<strong>Saturday 2:30\u20134:00pm</strong> \u00B7 Ages 13\u201316'],
    testimonial: { text: 'My son\u2019s beach canvas hangs in our living room and guests always ask which gallery it came from!', name: 'James K.', role: 'Parent of Liam, age 8' },
    outcomes: [{ icon: 'fa-image', title: 'Gallery Pieces', text: 'Full-size canvases worthy of the living-room wall.' }, { icon: 'fa-palette', title: 'Movement Vocabulary', text: 'Impressionism to abstract \u2014 real art history, lived.' }, { icon: 'fa-award', title: 'Exhibition Ready', text: 'Varnished, signed work for our termly showcase.' }],
    projects: ['Beach Boat Seascape', 'Starry Night Tribute', 'Jungle Canopy', 'City Lights Abstract'],
    faqExtra: [{ q: 'Do canvases cost extra?', a: 'No \u2014 every canvas, paint, and varnish coat is included in the class fee. Your child brings home finished, gallery-ready work at no extra cost.' }],
    ctaTitle: 'Try Canvas Painting \u2014 Free!'
  },
  'sketching-illustration': {
    name: 'Sketching & Illustration', label: 'Sketching', ages: '7\u201316 years', duration: '60 min', classSize: 'Max 8', schedule: 'Weekly', price: '$26', monthly: '$94', level: 'Beginner to advanced', instructor: 'sarah',
    image: 'https://i.pinimg.com/736x/4f/0d/6d/4f0d6d37427264e3017d2f19e41739f7.jpg', alt: 'Pen sketch illustration from Sketching and Illustration class',
    intro: 'From gesture drawings to detailed illustration, young artists learn to see and capture the world through expressive mark-making.',
    overview: ['Sketching & Illustration trains the fastest skill in art: capturing life as it moves. Gesture drawing, character design, and visual storytelling turn observers into illustrators.', 'Students build an illustration portfolio \u2014 comics, book scenes, and character sheets \u2014 while mastering pen, ink, and marker craft.'],
    highlight: { icon: 'fa-pen-nib', title: 'Draw the Living World', text: 'Thirty-second gestures loosen the hand; sustained studies sharpen the eye. Together they create illustrators, not copiers.' },
    learnings: ['Gesture drawing: capturing movement in seconds', 'Character design: faces, expressions, and poses', 'Ink techniques: hatching, stippling, and line weight', 'Visual storytelling across comic panels', 'Illustrating scenes from books and imagination', 'Building a varied illustration portfolio'],
    materials: [{ icon: 'fa-pen-nib', name: 'Ink Pens', desc: 'Fineliners, brush pens, and dip pens' }, { icon: 'fa-book-open', name: 'Sketchbooks', desc: 'Smooth illustration paper that loves ink' }, { icon: 'fa-marker', name: 'Markers', desc: 'Alcohol markers for illustration colour' }, { icon: 'fa-pencil', name: 'Layout Pencils', desc: 'Non-photo pencils for underdrawing' }],
    scheduleLines: ['<strong>Wednesday 5:00\u20136:00pm</strong> \u00B7 Ages 7\u201311', '<strong>Friday 5:00\u20136:00pm</strong> \u00B7 Ages 12\u201316'],
    testimonial: { text: 'My daughter illustrates her own comic series now \u2014 three notebooks full and counting. Sketching class lit the fuse!', name: 'Maria L.', role: 'Parent of twins, age 10' },
    outcomes: [{ icon: 'fa-bolt', title: 'Speed & Flow', text: 'Gesture skills that capture life in seconds.' }, { icon: 'fa-book-open', title: 'Storytelling', text: 'Comics and scenes with real narrative pull.' }, { icon: 'fa-folder-open', title: 'Portfolio Pages', text: 'Illustration sheets ready for showcase.' }],
    projects: ['Cricket Match Freeze-Frame', 'My Comic Hero', 'Book Scene: Storm at Sea', 'Expression Sheet x12'],
    faqExtra: [{ q: 'Is this suitable for comic-mad kids?', a: 'Perfectly \u2014 comics are core curriculum here. Character design, panels, and inking turn comic passion into genuine illustration skill.' }],
    ctaTitle: 'Try Sketching \u2014 Free!'
  },
  'mixed-media': {
    name: 'Mixed Media & Experimental', label: 'Mixed Media', ages: '9\u201316 years', duration: '75 min', classSize: 'Max 8', schedule: 'Weekly', price: '$34', monthly: '$119', level: 'Intermediate to advanced', instructor: 'priya',
    image: 'https://i.pinimg.com/736x/a5/46/63/a546634f0690d31fd10e78d4d47304a7.jpg', alt: 'Experimental mixed media wire artwork',
    intro: 'Break boundaries! Combine paint, collage, photography, fabric, and digital art in bold, expressive, multi-layered compositions.',
    overview: ['Mixed Media & Experimental is our rule-breaking lab. Paint meets photography, fabric meets wire, digital prints meet charcoal \u2014 and young artists discover there are no wrong combinations.', 'Ideal for confident creators aged 9+ who have outgrown single-medium projects and want gallery-scale, concept-driven work.'],
    highlight: { icon: 'fa-layer-group', title: 'No Rules, Real Skills', text: 'Experimentation with structure: composition, contrast, and concept hold wild ideas together into powerful finished pieces.' },
    learnings: ['Layering paint, paper, and photographic elements', 'Textile and fibre techniques in fine art', 'Wire, thread, and sculptural drawing', 'Image transfer and print integration', 'Concept development: from idea to exhibition piece', 'Presenting experimental work with confidence'],
    materials: [{ icon: 'fa-layer-group', name: 'Mixed Papers', desc: 'Tissue, card, photo prints, and ephemera' }, { icon: 'fa-palette', name: 'Paint & Ink', desc: 'Acrylics, inks, and spray for layering' }, { icon: 'fa-scissors', name: 'Textiles & Wire', desc: 'Fabric, thread, wire, and found objects' }, { icon: 'fa-camera', name: 'Print Station', desc: 'Photo prints and image-transfer mediums' }],
    scheduleLines: ['<strong>Thursday 5:00\u20136:15pm</strong> \u00B7 Ages 9\u201312', '<strong>Saturday 3:00\u20134:15pm</strong> \u00B7 Ages 13\u201316'],
    testimonial: { text: 'My teenager\u2019s wire-and-paint portrait won her school exhibition. Mixed media gave her a voice nothing else could!', name: 'Angela R.', role: 'Parent of Zoe, age 14' },
    outcomes: [{ icon: 'fa-flask', title: 'Fearless Experiment', text: 'Trying, failing, and remixing without fear.' }, { icon: 'fa-layer-group', title: 'Layered Mastery', text: 'Multi-material compositions with real depth.' }, { icon: 'fa-award', title: 'Showcase Stars', text: 'Bold pieces that anchor every exhibition.' }],
    projects: ['Wire Self-Portrait', 'City Layers Collage', 'Fabric Memory Map', 'Dreamscape Diorama'],
    faqExtra: [{ q: 'My child has only painted before \u2014 will they cope?', a: 'Yes. One term of any painting or drawing class is enough foundation. Instructors scaffold every technique, and beginners often produce the freshest work.' }],
    ctaTitle: 'Try Mixed Media \u2014 Free!'
  },
  'tiny-doodlers': {
    name: 'Tiny Doodlers', label: 'Drawing', ages: '4\u20136 years', duration: '45 min', classSize: 'Max 6', schedule: 'Weekly', price: '$22', monthly: '$79', level: 'Beginners', instructor: 'sarah',
    image: 'https://i.pinimg.com/736x/7d/8b/08/7d8b08cd617b4c786b8910a6d5cf9863.jpg', alt: 'Tiny Doodlers drawing class artwork for ages 4 to 6',
    intro: 'Shape recognition, line exploration, and story-based drawing. Children create simple scenes using crayons, markers, and wax pastels.',
    overview: ['Tiny Doodlers is drawing disguised as storytime. Four-to-six-year-olds follow picture tales while their crayons practise circles, lines, and shapes that quietly become real drawing skill.', 'Short, sensory, and gloriously cheerful \u2014 every session ends with a scene to take home and a story to tell about it.'],
    highlight: { icon: 'fa-shapes', title: 'Stories That Teach Lines', text: 'A bear\u2019s round tummy teaches circles; a castle\u2019s flag teaches triangles. Narrative makes technique unforgettable at this age.' },
    learnings: ['Circle, line, and shape recognition through play', 'Crayon and marker control for little hands', 'Drawing simple animals, faces, and houses', 'Story scenes: beginning, middle, and end pictures', 'Colour naming and confident colour choices', 'Sitting, sharing, and celebrating in a group'],
    materials: [{ icon: 'fa-crayon', name: 'Jumbo Crayons', desc: 'Easy-grip crayons and washable markers' }, { icon: 'fa-file-lines', name: 'Big Paper', desc: 'Large sheets that forgive big movements' }, { icon: 'fa-book-open', name: 'Story Cards', desc: 'Picture prompts that spark scenes' }, { icon: 'fa-shirt', name: 'Smocks', desc: 'Tiny aprons for gloriously messy makers' }],
    scheduleLines: ['<strong>Monday 3:30\u20134:15pm</strong> \u00B7 Ages 4\u20135', '<strong>Wednesday 3:30\u20134:15pm</strong> \u00B7 Ages 5\u20136'],
    testimonial: { text: 'My 5-year-old draws us a morning story every breakfast now. Tiny Doodlers turned scribbles into storytelling!', name: 'David K.', role: 'Parent of Aarav, age 5' },
    outcomes: [{ icon: 'fa-shapes', title: 'Shape Fluency', text: 'Circles, lines, and shapes on demand.' }, { icon: 'fa-book-open', title: 'Story Pictures', text: 'Scenes with characters children narrate proudly.' }, { icon: 'fa-heart', title: 'Joyful Habit', text: 'Drawing becomes a beloved daily ritual.' }],
    projects: ['My Family Faces', 'Bear Hunt Scene', 'Underwater Friends', 'Castle in the Clouds'],
    faqExtra: [{ q: 'Can parents stay for tiny classes?', a: 'Yes \u2014 for ages 4\u20136 a parent or carer is warmly welcome to stay, settle little ones in, and enjoy watching the magic happen.' }],
    ctaTitle: 'Try Tiny Doodlers \u2014 Free!'
  },
  'sketchbook-explorers': {
    name: 'Sketchbook Explorers', label: 'Drawing', ages: '7\u201312 years', duration: '60 min', classSize: 'Max 8', schedule: 'Weekly', price: '$26', monthly: '$94', level: 'Beginner to intermediate', instructor: 'sarah',
    image: 'https://i.pinimg.com/736x/39/06/fd/3906fd36b09f22d53df9ad8348dfd317.jpg', alt: 'Sketchbook Explorers drawing class for ages 7 to 12',
    intro: 'Observation drawing, gesture sketching, shading techniques, and composition. Students develop a personal sketchbook as an ongoing artistic journal.',
    overview: ['Sketchbook Explorers turns looking into a superpower. Children draw from real objects, nature, and each other \u2014 training eyes and hands together.', 'The sketchbook itself becomes the treasure: an ongoing journal of experiments, observations, and ideas that grows more precious every term.'],
    highlight: { icon: 'fa-eye', title: 'Learning to Really See', text: 'Observation is a teachable skill. Contour games, viewfinders, and timed sketches make careful looking feel like play.' },
    learnings: ['Contour and observational drawing from life', 'Gesture sketching: people and pets in motion', 'Shading: gradients, cross-hatching, and blending', 'Composition basics for balanced pages', 'Nature study: leaves, shells, and textures', 'Keeping a reflective, growing sketchbook'],
    materials: [{ icon: 'fa-pencil', name: 'Graphite Range', desc: 'HB to 8B pencils plus charcoal sticks' }, { icon: 'fa-book-open', name: 'Explorer Sketchbook', desc: 'A5 hardbound journal for every student' }, { icon: 'fa-eraser', name: 'Blending Tools', desc: 'Stumps, kneaded erasers, and fixative' }, { icon: 'fa-leaf', name: 'Study Objects', desc: 'Natural specimens and studio still-life kits' }],
    scheduleLines: ['<strong>Tuesday 4:00\u20135:00pm</strong> \u00B7 Ages 7\u20139', '<strong>Thursday 4:00\u20135:00pm</strong> \u00B7 Ages 10\u201312'],
    testimonial: { text: 'The sketchbook habit changed everything \u2014 my daughter draws daily now, and her observation skills amaze her teachers!', name: 'Gemma T.', role: 'Parent of Lily, age 9' },
    outcomes: [{ icon: 'fa-eye', title: 'True Observation', text: 'Drawing what is really there, not symbols.' }, { icon: 'fa-book-open', title: 'Cherished Journal', text: 'A sketchbook that documents real growth.' }, { icon: 'fa-pen-nib', title: 'Shading Skill', text: 'Form, light, and depth on every page.' }],
    projects: ['Shell Still Life', 'Pet Gesture Pages', 'Leaf Texture Study', 'My Street Sketch'],
    faqExtra: [{ q: 'What if my child says they can\u2019t draw?', a: 'That sentence is our favourite starting point! Observation games bypass self-judgement \u2014 most children surprise themselves within three sessions.' }],
    ctaTitle: 'Try Sketchbook Explorers \u2014 Free!'
  },
  'life-drawing': {
    name: 'Life Drawing & Illustration', label: 'Drawing', ages: '13\u201316 years', duration: '90 min', classSize: 'Max 6', schedule: 'Weekly', price: '$38', monthly: '$135', level: 'Advanced', instructor: 'lucas',
    image: 'https://i.pinimg.com/736x/06/82/cc/0682cc5884f1ef11cd25c28e1024e053.jpg', alt: 'Life Drawing and Illustration class artwork for ages 13 to 16',
    intro: 'Advanced perspective, proportion, portraiture, and editorial illustration techniques. Ideal portfolio preparation for GCSE or school art.',
    overview: ['Life Drawing & Illustration is our most advanced drawing programme. Teens master proportion, anatomy basics, perspective systems, and portraiture with professional rigour.', 'The programme doubles as portfolio preparation \u2014 students graduate with exhibition pieces and the observational fluency schools and competitions demand.'],
    highlight: { icon: 'fa-ruler-combined', title: 'Draw Like a Professional', text: 'Sight-size measuring, comparative proportion, and constructive anatomy \u2014 the same foundations taught in art college, paced for teens.' },
    learnings: ['Accurate proportion with sighting and measuring', 'One, two, and three-point perspective systems', 'Portraiture: features, likeness, and expression', 'Figure basics: gesture, balance, and anatomy', 'Editorial illustration: concept meets image', 'Portfolio curation and presentation skills'],
    materials: [{ icon: 'fa-pencil', name: 'Professional Pencils', desc: 'Full graphite range plus carbon pencils' }, { icon: 'fa-book-open', name: 'A3 Sketchbooks', desc: 'Large-format books for sustained study' }, { icon: 'fa-pen-nib', name: 'Ink & Wash', desc: 'Brush pens and ink wash for illustration' }, { icon: 'fa-ruler', name: 'Measuring Tools', desc: 'Viewfinders, proportional dividers, guides' }],
    scheduleLines: ['<strong>Tuesday 5:30\u20137:00pm</strong> \u00B7 Ages 13\u201314', '<strong>Thursday 5:30\u20137:00pm</strong> \u00B7 Ages 15\u201316'],
    testimonial: { text: 'The portfolio my daughter built here earned her a school art scholarship. Worth every single session!', name: 'Priya N.', role: 'Parent of Anaya, age 15' },
    outcomes: [{ icon: 'fa-ruler-combined', title: 'True Accuracy', text: 'Measured, proportional drawing at a high level.' }, { icon: 'fa-user-pen', title: 'Portrait Skill', text: 'Likeness and character in every face.' }, { icon: 'fa-folder-open', title: 'Winning Portfolio', text: 'Scholarship- and exam-ready body of work.' }],
    projects: ['Self-Portrait in Charcoal', 'Street Corner Perspective', 'Illustrated Poem Spread', 'Figure in Motion Series'],
    faqExtra: [{ q: 'Is this suitable for GCSE preparation?', a: 'Yes \u2014 the programme maps directly to GCSE assessment objectives: recording, exploring, developing, and presenting. Many students use classwork in coursework.' }],
    ctaTitle: 'Try Life Drawing \u2014 Free!'
  },
  'watercolour-wonder': {
    name: 'Watercolour Wonder', label: 'Painting Class', ages: '6\u201312 years', duration: '60 min', classSize: 'Max 8', schedule: 'Weekly', price: '$28', monthly: '$89', level: 'All levels', instructor: 'sarah',
    image: 'https://i.pinimg.com/1200x/49/5c/8f/495c8f413274e2e673d4268e38184d2d.jpg', alt: 'Watercolour Wonder class painting for ages 6 to 12',
    intro: 'A dedicated watercolour painting class where children explore the delicate, luminous world of watercolour through guided projects and free exploration.',
    overview: ['Watercolour Wonder is one of our most loved classes \u2014 a dedicated space where children aged 6\u201312 explore the unique, translucent beauty of watercolour paints in a warm, supportive environment.', 'Whether your child is a complete beginner or has some experience, sessions are paced to meet them where they are, with individual guidance that gently stretches every student.'],
    highlight: { icon: 'fa-droplet', title: 'What Makes Watercolour Special?', text: 'Watercolour teaches children to embrace happy accidents, work with the flow of water, and develop patience and observation \u2014 skills far beyond the art room.' },
    learnings: ['Wet-on-wet & wet-on-dry watercolour techniques', 'Colour theory \u2014 primary, secondary & complementary colours', 'Brush care, pressure, and stroke control', 'Resist techniques using wax crayon & masking fluid', 'Simple composition & negative space', 'Layering & glazing for depth and luminosity', 'Texture creation using salt, sponge & blowing', 'Creative confidence & embracing happy accidents'],
    materials: [{ icon: 'fa-palette', name: 'Watercolour Paints', desc: 'Premium pan & tube watercolours, non-toxic' }, { icon: 'fa-paintbrush', name: 'Quality Brushes', desc: 'Round, flat, fan & detail brushes in all sizes' }, { icon: 'fa-file-lines', name: 'Watercolour Paper', desc: '300gsm cold-press blocks, professional quality' }, { icon: 'fa-flask', name: 'Texture Tools', desc: 'Salt, sponges, masking fluid, wax & pipettes' }],
    scheduleLines: ['<strong>Tuesday 4:00\u20135:00pm</strong> \u00B7 Ages 6\u20139', '<strong>Saturday 10:00\u201311:00am</strong> \u00B7 Ages 9\u201312'],
    testimonial: { text: 'My daughter has been doing Watercolour Wonder for 6 months and the progress is breathtaking. She now paints entire scenes from imagination!', name: 'Gemma T.', role: 'Parent of Zoe, age 9' },
    outcomes: [{ icon: 'fa-palette', title: 'Technical Skills', text: 'Genuine watercolour skills for life \u2014 real artist techniques.' }, { icon: 'fa-fire', title: 'Creative Confidence', text: 'Trusting instincts and feeling proud of unique decisions.' }, { icon: 'fa-brain', title: 'Focus & Patience', text: 'Mindful attention that builds calm concentration.' }],
    projects: ['Sunset Landscape', 'Watercolour Flowers', 'Ocean & Sky', 'Abstract Colour Play'],
    faqExtra: [{ q: 'Does my child need any watercolour experience?', a: 'Absolutely not! Complete beginners and experienced young painters are equally welcome \u2014 instructors assess each child in the first session and pace lessons individually.' }],
    ctaTitle: 'Try Watercolour Wonder \u2014 Free!'
  },
  'acrylic-painting': {
    name: 'Acrylic Painting', label: 'Painting', ages: '8\u201316 years', duration: '75 min', classSize: 'Max 8', schedule: 'Weekly', price: '$32', monthly: '$115', level: 'Beginner to intermediate', instructor: 'james',
    image: 'https://i.pinimg.com/736x/c8/b3/22/c8b32202ef566a3f50a2fa71063a1875.jpg', alt: 'Acrylic Painting class artwork for ages 8 to 16',
    intro: 'Colour mixing, layering, blending, and brush technique using vibrant acrylic paints on canvas boards and stretched canvas. Bold and expressive.',
    overview: ['Acrylic Painting is where colour gets loud \u2014 in the best way. Fast-drying, forgiving, and brilliantly vivid, acrylics let young artists layer boldly and correct fearlessly.', 'From colour-mixing foundations to finished canvas-board masterpieces, students build a painter\u2019s toolkit and a wall-worthy collection.'],
    highlight: { icon: 'fa-palette', title: 'Bold Colour, Zero Fear', text: 'Acrylics forgive everything: paint over, scrape back, glaze again. Young painters experiment freely because mistakes simply disappear.' },
    learnings: ['Colour mixing and matching any hue from primaries', 'Layering: underpainting, blocking in, and glazing', 'Blending: gradients, skies, and soft transitions', 'Brush and palette-knife mark-making', 'Painting on canvas boards and stretched canvas', 'Finishing: edges, signatures, and presentation'],
    materials: [{ icon: 'fa-palette', name: 'Acrylic Paints', desc: 'High-pigment student acrylics, non-toxic' }, { icon: 'fa-paintbrush', name: 'Brush Range', desc: 'Flats, filberts, rounds, and palette knives' }, { icon: 'fa-file-lines', name: 'Boards & Canvas', desc: 'Canvas boards plus a stretched canvas termly' }, { icon: 'fa-shirt', name: 'Studio Aprons', desc: 'Full-cover aprons \u2014 acrylics mean business!' }],
    scheduleLines: ['<strong>Monday 5:00\u20136:15pm</strong> \u00B7 Ages 8\u201311', '<strong>Wednesday 5:00\u20136:15pm</strong> \u00B7 Ages 12\u201316'],
    testimonial: { text: 'The colours my son achieves now are unbelievable. Acrylic class turned his bedroom into an art studio!', name: 'James K.', role: 'Parent of Liam, age 11' },
    outcomes: [{ icon: 'fa-palette', title: 'Colour Mastery', text: 'Any hue, mixed with confidence from scratch.' }, { icon: 'fa-layer-group', title: 'Layered Technique', text: 'Underpainting to glaze \u2014 real painter workflow.' }, { icon: 'fa-image', title: 'Bold Finished Work', text: 'Vivid pieces that demand wall space.' }],
    projects: ['Parrot Colour Study', 'Mountain Lake Acrylic', 'Pop-Art Portrait', 'Impasto Flowers'],
    faqExtra: [{ q: 'Do acrylic stains wash out?', a: 'Acrylics stain when dry, so we suit up in full studio aprons and use washable tables. A dedicated art top from home is the only extra precaution we suggest.' }],
    ctaTitle: 'Try Acrylic Painting \u2014 Free!'
  },
  'canvas-masterclass': {
    name: 'Canvas Masterclass', label: 'Canvas', ages: '10\u201316 years', duration: '90 min', classSize: 'Max 6', schedule: 'Weekly', price: '$38', monthly: '$135', level: 'Intermediate to advanced', instructor: 'james',
    image: 'https://i.pinimg.com/736x/7d/65/53/7d65533022a926b09500b11961bfec98.jpg', alt: 'Canvas Masterclass painting for ages 10 to 16',
    intro: 'Full canvas painting projects inspired by art history movements \u2014 Impressionism, Expressionism, abstract art. Frameable, gallery-worthy works.',
    overview: ['Canvas Masterclass is our flagship painting programme. Small groups of six work at easels on full stretched canvases, guided through art-history-inspired masterpieces.', 'Each term studies a movement \u2014 painting light like the Impressionists, feeling like the Expressionists \u2014 and ends with a framed, exhibition-ready original.'],
    highlight: { icon: 'fa-landmark', title: 'Standing on Giants\u2019 Shoulders', text: 'Studying Monet\u2019s light or Van Gogh\u2019s energy gives young painters both technique and cultural fluency most adults never gain.' },
    learnings: ['Easel painting: posture, palette, and process', 'Movement studies: Impressionism to abstraction', 'Advanced glazing and impasto techniques', 'Large-scale composition and planning', 'Varnishing, framing, and exhibition prep', 'Writing artist statements for showcases'],
    materials: [{ icon: 'fa-image', name: 'Gallery Canvases', desc: 'Large stretched canvases, exhibition grade' }, { icon: 'fa-palette', name: 'Pro Acrylics', desc: 'Heavy-body acrylics with maximum pigment' }, { icon: 'fa-paintbrush', name: 'Easel Brushes', desc: 'Long-handle brushes, knives, and midi sticks' }, { icon: 'fa-award', name: 'Framing Kit', desc: 'Float frames and hanging hardware termly' }],
    scheduleLines: ['<strong>Friday 5:00\u20136:30pm</strong> \u00B7 Ages 10\u201313', '<strong>Sunday 11:00am\u201312:30pm</strong> \u00B7 Ages 14\u201316'],
    testimonial: { text: 'My daughter\u2019s Impressionist canvas won best in show at the school fair. The masterclass programme is worth every penny!', name: 'Angela R.', role: 'Parent of Mia, age 13' },
    outcomes: [{ icon: 'fa-landmark', title: 'Art History, Lived', text: 'Movements understood through the brush, not books.' }, { icon: 'fa-image', title: 'Framed Originals', text: 'Gallery-finished canvases, varnished and framed.' }, { icon: 'fa-star', title: 'Exhibition Honours', text: 'Showcase centrepieces and competition entries.' }],
    projects: ['Water-Lily Impression', 'Starry Night Energy', 'Golden Portrait Hour', 'Colour-Field Calm'],
    faqExtra: [{ q: 'How is this different from Canvas Painting?', a: 'Masterclass goes deeper: longer sessions, smaller groups of six, art-history curriculum, and a framed exhibition piece every term \u2014 ideal for committed painters aged 10+.' }],
    ctaTitle: 'Try Canvas Masterclass \u2014 Free!'
  }
};

/* ============================================================
   SERVICE DETAILS RENDERER (?service=slug)
   ============================================================ */
const ServiceDetails = {
  DEFAULT_SLUG: 'watercolour-wonder',

  init() {
    if (!document.getElementById('service-hero-h1')) return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('service') || this.DEFAULT_SLUG;
    const s = SERVICES[slug] || SERVICES[this.DEFAULT_SLUG];
    const keys = Object.keys(SERVICES);
    const idx = Math.max(0, keys.indexOf(slug));
    const instructor = AUTHORS[s.instructor] || AUTHORS.sarah;

    document.title = s.name + ' | Little Splatters \u2014 Where Every Child Creates';

    const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

    setText('crumb-service', s.name);
    setHTML('service-label', '<i class="fa-solid fa-palette" aria-hidden="true"></i> ' + s.label);
    setHTML('service-hero-h1', s.name + ' \u2014 <br>Ages ' + s.ages.replace(' years', ''));
    setText('service-intro', s.intro);
    setText('stat-duration', s.duration);
    setText('stat-size', s.classSize);
    setText('stat-schedule', s.schedule);

    const heroImg = document.getElementById('service-hero-img');
    if (heroImg) { heroImg.src = s.image; heroImg.alt = s.alt; heroImg.setAttribute('referrerpolicy', 'no-referrer'); }

    setHTML('overview-name', 'About <span>' + s.name + '</span>');
    setHTML('overview-body',
      '<p style="margin-top:16px;margin-bottom:20px;font-size:1.05rem;">' + s.overview[0] + '</p>' +
      '<p style="margin-bottom:32px;">' + s.overview[1] + '</p>');
    setHTML('overview-highlights',
      '<div class="highlight-box blue" style="margin-bottom:24px;">' +
        '<h4 style="margin-bottom:8px;"><i class="fa-solid ' + s.highlight.icon + '" aria-hidden="true"></i> ' + s.highlight.title + '</h4>' +
        '<p style="font-size:0.9rem;">' + s.highlight.text + '</p>' +
      '</div>' +
      '<div class="highlight-box mint">' +
        '<h4 style="margin-bottom:8px;"><i class="fa-solid fa-calendar-days" aria-hidden="true"></i> Class Schedule</h4>' +
        s.scheduleLines.map(l => '<p style="font-size:0.9rem;">' + l + '</p>').join('') +
      '</div>');

    setText('sv-age', s.ages.replace(' years', ''));
    setText('sv-duration', s.duration);
    setText('sv-size', s.classSize);
    setText('sv-level', s.level);
    setText('sv-instructor', instructor.name);
    setText('sp-single', s.price);
    setText('sp-monthly', s.monthly);

    setHTML('learn-grid', s.learnings.map(l =>
      '<div class="learn-item"><div class="learn-item-check"><i class="fa-solid fa-check" aria-hidden="true"></i></div><p>' + l + '</p></div>').join(''));
    setHTML('learn-sub', 'Every ' + s.name + ' class is carefully structured around skill development and personal creative growth.');
    setHTML('outcomes-grid', s.outcomes.map(o =>
      '<div class="card text-center">' +
        '<div style="font-size:3rem;margin-bottom:12px;"><i class="fa-solid ' + o.icon + '" aria-hidden="true"></i></div>' +
        '<h4>' + o.title + '</h4>' +
        '<p style="font-size:0.85rem;color:var(--text-muted);">' + o.text + '</p>' +
      '</div>').join(''));
    setHTML('materials-grid', s.materials.map(m =>
      '<div class="material-card">' +
        '<span class="material-icon"><i class="fa-solid ' + m.icon + '" aria-hidden="true"></i></span>' +
        '<h5>' + m.name + '</h5>' +
        '<p style="font-size:0.78rem;color:var(--text-muted);">' + m.desc + '</p>' +
      '</div>').join(''));
    setHTML('projects-grid', s.projects.map((t, i) => {
      const p = PROJECT_POOL[(idx + i) % PROJECT_POOL.length];
      return '<div style="border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);position:relative;">' +
        '<img src="' + p.img + '" alt="' + t + ' \u2014 ' + s.name + '" loading="lazy" style="width:100%;aspect-ratio:1;object-fit:cover;" referrerpolicy="no-referrer">' +
        '<div style="padding:14px;background:var(--bg-card);"><h5 style="font-size:0.88rem;">' + t + '</h5></div>' +
      '</div>';
    }).join(''));

    setText('journey-intro', 'Every ' + s.duration + ' ' + s.name + ' session follows a thoughtful, child-centred structure that balances skill learning with creative freedom.');
    setText('st-text', '\u201C' + s.testimonial.text + '\u201D');
    setText('st-name', s.testimonial.name);
    setText('st-role', s.testimonial.role);

    const genericFaq = [
      { q: 'What do we need to bring?', a: 'Nothing at all! All materials are provided. We just ask that children wear clothing that can get a little paint on it. A water bottle is always welcome.' },
      { q: 'What happens if we miss a class?', a: 'Monthly members can carry over one missed class per month with 24 hours\u2019 notice. Catch-up sessions run on Saturday mornings where spaces allow.' },
      { q: 'How do I book a free trial class?', a: 'Fill in the trial booking form on the Contact page or call +1 (555) 287-ARTS. We confirm within 24 hours \u2014 the first trial is completely free.' }
    ];
    const faqs = [...s.faqExtra, ...genericFaq];
    setHTML('faq-list', faqs.map(f =>
      '<div class="accordion-item" role="listitem">' +
        '<div class="accordion-header" role="button" tabindex="0" aria-expanded="false">' + f.q + '<div class="accordion-icon">+</div></div>' +
        '<div class="accordion-body"><div class="accordion-body-inner">' + f.a + '</div></div>' +
      '</div>').join(''));
    setText('faq-sub', 'Everything parents need to know about ' + s.name + ' \u2014 and any of our classes.');

    setText('cta-title', s.ctaTitle);
    setText('cta-text', 'Book your child\u2019s free ' + s.name.toLowerCase() + ' trial class today. No experience needed, no commitment required \u2014 just bring curiosity and we\u2019ll handle the rest.');

    // Re-init accordion for dynamically rendered FAQ items
    if (typeof Accordion !== 'undefined') Accordion.init();
  }
};

document.addEventListener('DOMContentLoaded', () => ServiceDetails.init());
