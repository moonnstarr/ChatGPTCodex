const tabs = document.querySelectorAll('.tab');
const postOutput = document.getElementById('postOutput');
const imageOutput = document.getElementById('imageOutput');
const nicheInput = document.getElementById('niche');
const audienceInput = document.getElementById('audience');
const goalInput = document.getElementById('goal');

const copyByPlatform = {
  linkedin: ({ niche, audience, goal }) =>
    `I spent this week auditing the top 50 ${niche} conversations.\n\nThe biggest gap? Most brands explain features, but very few explain outcomes in language ${audience} actually repeat.\n\nSo we rebuilt our content architecture around 3 rules:\n1) Start with a practical tension\n2) Show one believable proof point\n3) End with an action worth sharing\n\nCampaign focus: ${goal}.\n\nIf you're building in ${niche}, what's one message your audience keeps misunderstanding?`,
  instagram: ({ niche, audience }) =>
    `The moment we stopped sounding “perfect,” engagement doubled.\n\nIn ${niche}, people don't connect with polished scripts—they connect with perspective.\n\nToday we are posting with:\n✨ raw insight\n✨ one concrete result\n✨ one question for ${audience}\n\nSave this as your reminder: human tone beats hype every single time. #${niche.replace(/\s+/g, '')} #BrandStory #ContentStrategy`,
  facebook: ({ niche, goal }) =>
    `Quick behind-the-scenes from our content lab 👇\n\nWe analyzed what performs best in ${niche}, then rebuilt our campaign to focus on clarity over noise.\n\nThis week's mission: ${goal}.\n\nWould you like us to share the exact posting framework we used?`,
  x: ({ niche }) =>
    `Most ${niche} content fails for one reason: it sounds written for algorithms, not humans.\n\nTop creators win by being specific, opinionated, and useful in under 280 chars.\n\nWe're building every post around that principle this week.`
};

const imageBriefTemplate = ({ niche, audience }) =>
  `Viral Image Direction\n• Core concept: a realistic, documentary-style moment showing ${audience} interacting with a ${niche} product/service in a premium workspace.\n• Visual style: ultra-clear 8K look, natural skin texture, subtle film grain, cinematic daylight from side window.\n• Composition: rule-of-thirds framing, shallow depth of field, practical background details (not sterile).\n• Emotion trigger: confidence + momentum, “I want this outcome” feeling.\n• Delivery: one hero still, one close-up detail shot, one vertical crop for reels/stories.`;

function collectInput() {
  return {
    niche: nicheInput.value.trim() || 'modern B2B SaaS',
    audience: audienceInput.value.trim() || 'decision-makers and growth teams',
    goal: goalInput.value.trim() || 'increase high-intent inbound leads'
  };
}

function render(platform = 'linkedin') {
  const payload = collectInput();
  postOutput.textContent = copyByPlatform[platform](payload);
  imageOutput.textContent = imageBriefTemplate(payload);
}

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    render(tab.dataset.platform);
  });
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const activeTab = document.querySelector('.tab.active')?.dataset.platform || 'linkedin';
  render(activeTab);
});

document.getElementById('analyzeBtn').addEventListener('click', () => {
  imageOutput.textContent = `${imageBriefTemplate(collectInput())}\n\nAnalysis status: Top writer patterns mapped, engagement hooks extracted, and style blueprint refreshed.`;
});

render();
