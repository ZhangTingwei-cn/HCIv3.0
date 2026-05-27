const FEED_ASSET_VERSION = "cute-feed-1";

const FEED_CLIPS = [
  { id: "001", author: "@island.minute", caption: "A quick break can drift much longer than planned.", likes: "2.4k", comments: "318", shares: "126" },
  { id: "002", author: "@subway.scenes", caption: "One more swipe can quietly turn a short break into autopilot.", likes: "8.6k", comments: "742", shares: "201" },
  { id: "036", author: "@sunny.paws", caption: "A beach puppy is cute enough without turning into another twenty minutes.", likes: "27.4k", comments: "2.3k", shares: "691" },
  { id: "003", author: "@sunset.loop", caption: "A calm feed still makes it easy to keep going for one more clip.", likes: "16.2k", comments: "1.4k", shares: "388" },
  { id: "004", author: "@city.pause", caption: "Gentle Friction steps in before time disappears into the scroll.", likes: "5.9k", comments: "406", shares: "173" },
  { id: "005", author: "@kitchen.frame", caption: "Scrolling often starts small and keeps asking for a little more.", likes: "12.8k", comments: "927", shares: "244" },
  { id: "038", author: "@shore.dogs", caption: "The feed feels lighter when the next stop is still your choice.", likes: "19.6k", comments: "1.4k", shares: "412" },
  { id: "006", author: "@peak.notes", caption: "The longer we stay, the harder it feels to step back out.", likes: "4.1k", comments: "262", shares: "91" },
  { id: "007", author: "@road.window", caption: "A gentle cue works best before the feed fully takes over.", likes: "9.7k", comments: "681", shares: "215" },
  { id: "008", author: "@screen.rhythm", caption: "Smooth motion makes time feel lighter than it really is.", likes: "21.3k", comments: "1.9k", shares: "504" },
  { id: "009", author: "@coast.views", caption: "Short videos are easiest to stop before the habit locks in.", likes: "6.4k", comments: "534", shares: "188" },
  { id: "039", author: "@collie.walks", caption: "A gentle pause works best before cute turns into autopilot.", likes: "14.2k", comments: "1.1k", shares: "305" },
  { id: "010", author: "@studio.craft", caption: "Soft friction adds a pause without taking control away.", likes: "14.9k", comments: "1.1k", shares: "312" },
  { id: "011", author: "@city.frames", caption: "A visible timer helps bring attention back to the moment.", likes: "3.8k", comments: "194", shares: "77" },
  { id: "012", author: "@harbor.light", caption: "A small check-in can be enough to break the automatic scroll.", likes: "7.2k", comments: "488", shares: "149" },
  { id: "013", author: "@quiet.resort", caption: "The goal is not to block you, only to help you notice sooner.", likes: "18.6k", comments: "1.5k", shares: "427" },
  { id: "037", author: "@park.sniffs", caption: "Even the softest scroll keeps asking for one more clip.", likes: "11.8k", comments: "903", shares: "228" },
  { id: "014", author: "@shore.daily", caption: "Support feels better when it stays calm and easy to dismiss.", likes: "10.4k", comments: "823", shares: "233" },
  { id: "015", author: "@trail.overview", caption: "A better ending starts with one intentional decision.", likes: "5.1k", comments: "301", shares: "118" },
  { id: "016", author: "@window.route", caption: "A spare minute can become a full loop before you notice.", likes: "11.6k", comments: "864", shares: "245" },
  { id: "017", author: "@museum.loop", caption: "Quiet clips still keep the thumb moving on their own.", likes: "7.9k", comments: "603", shares: "174" },
  { id: "018", author: "@street.glow", caption: "Stopping is easiest right before the next autoplay begins.", likes: "19.7k", comments: "1.7k", shares: "462" },
  { id: "019", author: "@late.train", caption: "The feed feels short because each clip asks for one more.", likes: "4.7k", comments: "288", shares: "102" },
  { id: "020", author: "@quiet.steps", caption: "A small nudge can help turn attention back to your plan.", likes: "13.2k", comments: "941", shares: "251" },
  { id: "021", author: "@studio.light", caption: "The hardest part is noticing when relaxing becomes drifting.", likes: "9.1k", comments: "657", shares: "198" },
  { id: "022", author: "@lobby.notes", caption: "A gentle reminder works best before the scroll gets sticky.", likes: "6.8k", comments: "411", shares: "143" },
  { id: "023", author: "@river.frame", caption: "The next clip always feels easier than leaving now.", likes: "15.4k", comments: "1.2k", shares: "336" },
  { id: "024", author: "@after.class", caption: "Break time ends faster when the feed keeps deciding for you.", likes: "22.1k", comments: "2.1k", shares: "548" },
  { id: "025", author: "@weekend.view", caption: "Protection should feel supportive, not like a punishment.", likes: "8.3k", comments: "592", shares: "166" },
  { id: "026", author: "@city.night", caption: "A softer screen can reduce just enough pull to step away.", likes: "17.8k", comments: "1.3k", shares: "409" },
  { id: "027", author: "@corner.table", caption: "A timer helps the moment feel real again.", likes: "5.6k", comments: "347", shares: "119" },
  { id: "028", author: "@campus.pause", caption: "Short videos borrow attention a few seconds at a time.", likes: "12.1k", comments: "886", shares: "238" },
  { id: "029", author: "@small.moments", caption: "Less friction to start means more friction to stop.", likes: "24.8k", comments: "2.4k", shares: "621" },
  { id: "030", author: "@slow.frames", caption: "The best interruption is the one you barely resent.", likes: "10.8k", comments: "771", shares: "224" },
  { id: "031", author: "@daily.pattern", caption: "A quick check-in can interrupt the habit before it settles.", likes: "3.9k", comments: "241", shares: "84" },
  { id: "032", author: "@blue.hour", caption: "The scroll feels endless because the decision keeps getting delayed.", likes: "14.3k", comments: "1.1k", shares: "315" },
  { id: "033", author: "@soft.daylight", caption: "A calmer feed makes the exit easier to choose.", likes: "18.1k", comments: "1.6k", shares: "433" },
  { id: "034", author: "@northbound", caption: "You do not need a block to recover control.", likes: "6.2k", comments: "379", shares: "132" },
  { id: "035", author: "@inside.look", caption: "One intentional pause can reset the whole session.", likes: "9.8k", comments: "708", shares: "207" }
];

const FEED_ITEMS = FEED_CLIPS.map((item) => ({
  file: `../video/app-feed-15/feed_${item.id}.mp4?v=${FEED_ASSET_VERSION}`,
  poster: `../video/app-feed-15/feed_${item.id}.jpg?v=${FEED_ASSET_VERSION}`,
  author: item.author,
  caption: item.caption,
  likes: item.likes,
  comments: item.comments,
  shares: item.shares
}));

const HOLD_DURATION_STAGE_4 = 20000;
const BREAK_COOLDOWN_MS = 15 * 60 * 1000;
const REMINDER_DISMISS_THRESHOLD = 90;
const REMINDER_AUTO_HIDE_MS = 5000;
const VIDEO_SWIPE_THRESHOLD = 56;
const SETTINGS_VERSION = 2;
const DEMO_MODE = new URLSearchParams(window.location.search).has("demo");
const PLAN_PRESETS = {
  quick: { 2: 5, 3: 10, 4: 15 },
  standard: { 2: 10, 3: 15, 4: 20 },
  long: { 2: 15, 3: 20, 4: 30 }
};
const USAGE_STORAGE_KEY = "gentle-friction-usage-v1";
const SETTINGS_STORAGE_KEY = "gentle-friction-settings-v1";
const APP_CONFIG = [
  { id: "pulse", name: "TikTok" },
  { id: "instagram", name: "Instagram" },
  { id: "youtube", name: "YouTube" },
  { id: "snapchat", name: "Snapchat" }
];
const STATS_DAYS = [
  {
    label: "Mon",
    fullLabel: "Monday",
    protectedMinutes: 24,
    stops: 2,
    returnRate: 52,
    mode: "Gentle",
    badge: "Steady",
    moments: [
      { time: "12:18", stage: "Check-in", result: "Closed after the first reminder." },
      { time: "17:42", stage: "Soft friction", result: "Left after the feed softened." },
      { time: "22:05", stage: "Choice", result: "Held to stay, then exited." }
    ]
  },
  {
    label: "Tue",
    fullLabel: "Tuesday",
    protectedMinutes: 28,
    stops: 3,
    returnRate: 58,
    mode: "Balanced",
    badge: "Growing",
    moments: [
      { time: "10:36", stage: "Check-in", result: "Paused between classes." },
      { time: "18:21", stage: "Soft friction", result: "Stopped after two blurred clips." },
      { time: "23:11", stage: "Choice", result: "Exited before sleep." }
    ]
  },
  {
    label: "Wed",
    fullLabel: "Wednesday",
    protectedMinutes: 21,
    stops: 2,
    returnRate: 49,
    mode: "Gentle",
    badge: "Light day",
    moments: [
      { time: "13:02", stage: "Check-in", result: "Returned to work after lunch." },
      { time: "21:48", stage: "Soft friction", result: "Stopped without opening more clips." },
      { time: "22:32", stage: "Choice", result: "Stayed briefly, then closed TikTok." }
    ]
  },
  {
    label: "Thu",
    fullLabel: "Thursday",
    protectedMinutes: 34,
    stops: 4,
    returnRate: 68,
    mode: "Balanced",
    badge: "Best day",
    moments: [
      { time: "09:44", stage: "Check-in", result: "Re-focused before class." },
      { time: "16:25", stage: "Soft friction", result: "Exited after the feed softened." },
      { time: "22:14", stage: "Choice", result: "Chose a break and put the phone down." }
    ]
  },
  {
    label: "Fri",
    fullLabel: "Friday",
    protectedMinutes: 31,
    stops: 3,
    returnRate: 64,
    mode: "Balanced",
    badge: "Consistent",
    moments: [
      { time: "11:58", stage: "Check-in", result: "Stopped during a short break." },
      { time: "19:07", stage: "Soft friction", result: "Left after muted color feedback." },
      { time: "23:02", stage: "Choice", result: "Held to stay, then closed." }
    ]
  },
  {
    label: "Sat",
    fullLabel: "Saturday",
    protectedMinutes: 38,
    stops: 5,
    returnRate: 72,
    mode: "Firm",
    badge: "Strong reset",
    moments: [
      { time: "14:20", stage: "Check-in", result: "Stepped out after a quick notice." },
      { time: "20:46", stage: "Soft friction", result: "Stopped after reduced visual pull." },
      { time: "23:18", stage: "Choice", result: "Exited at the hold screen." }
    ]
  },
  {
    label: "Sun",
    fullLabel: "Sunday",
    protectedMinutes: 29,
    stops: 3,
    returnRate: 61,
    mode: "Balanced",
    badge: "Stable",
    moments: [
      { time: "15:16", stage: "Check-in", result: "Back to reading after one pause." },
      { time: "18:39", stage: "Soft friction", result: "Stopped after the second softened clip." },
      { time: "21:57", stage: "Choice", result: "Ended the session before bed." }
    ]
  }
];

function defaultSettings() {
  return {
    settingsVersion: SETTINGS_VERSION,
    monitoredApps: ["pulse"],
    thresholds: { 2: 5, 3: 10, 4: 15 },
    effects: ["blur", "fade", "tint", "swipe"],
    goal: "study",
    interventionStyle: "balanced"
  };
}

function loadSettings() {
  const fallback = defaultSettings();

  try {
    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);
    const monitoredApps = Array.isArray(parsed.monitoredApps)
      ? parsed.monitoredApps.filter((appId) => APP_CONFIG.some((app) => app.id === appId))
      : fallback.monitoredApps;
    let effects = Array.isArray(parsed.effects)
      ? parsed.effects.filter((effect) => ["blur", "fade", "tint", "swipe"].includes(effect))
      : fallback.effects;
    const settingsVersion = Number(parsed.settingsVersion) || 1;

    if (settingsVersion < SETTINGS_VERSION && !effects.includes("swipe")) {
      effects = [...effects, "swipe"];
    }

    return {
      settingsVersion: SETTINGS_VERSION,
      monitoredApps: monitoredApps.length ? monitoredApps : fallback.monitoredApps,
      thresholds: {
        2: Number(parsed.thresholds?.[2]) || fallback.thresholds[2],
        3: Number(parsed.thresholds?.[3]) || fallback.thresholds[3],
        4: Number(parsed.thresholds?.[4]) || fallback.thresholds[4]
      },
      effects: effects.length ? effects : fallback.effects,
      goal: parsed.goal || fallback.goal,
      interventionStyle: parsed.interventionStyle || fallback.interventionStyle
    };
  } catch {
    return fallback;
  }
}

function defaultUsageData() {
  return {
    appOpenCount: 0,
    protectionStartCount: 0,
    cooldownUntil: 0,
    sessions: []
  };
}

function loadUsageData() {
  try {
    const raw = window.localStorage.getItem(USAGE_STORAGE_KEY);
    if (!raw) {
      return defaultUsageData();
    }

    const parsed = JSON.parse(raw);
    return {
      appOpenCount: Number(parsed.appOpenCount) || 0,
      protectionStartCount: Number(parsed.protectionStartCount) || 0,
      cooldownUntil: Math.max(0, Number(parsed.cooldownUntil) || 0),
      sessions: Array.isArray(parsed.sessions)
        ? parsed.sessions
            .filter((session) => session && typeof session === "object")
            .map((session) => ({
              startedAt: Number(session.startedAt) || Date.now(),
              endedAt: Number(session.endedAt) || Date.now(),
              durationSeconds: Math.max(1, Number(session.durationSeconds) || 1),
              result: session.result || "Paused",
              app: session.app || "TikTok"
            }))
        : []
    };
  } catch {
    return defaultUsageData();
  }
}

const initialSettings = loadSettings();

const state = {
  activeView: "home",
  gentlePage: "overview",
  monitoredApps: new Set(initialSettings.monitoredApps),
  onboardingSeen: true,
  goal: initialSettings.goal,
  interventionStyle: initialSettings.interventionStyle,
  thresholds: { ...initialSettings.thresholds },
  effects: new Set(initialSettings.effects),
  elapsedSeconds: 0,
  currentVideoIndex: FEED_ITEMS.length,
  currentStage: 1,
  stage3Progress: 0,
  holdStart: 0,
  holdFrame: 0,
  stage2Dismissed: false,
  reminderDragStartY: null,
  reminderOffsetY: 0,
  reminderTimeout: 0,
  trackDragStartY: null,
  trackDragDeltaY: 0,
  trackAnimating: false,
  elapsedCarryMs: 0,
  lastLoopAt: performance.now(),
  previewProgress: 0,
  previewDirection: 1,
  swipeStepsTowardNext: 0,
  swipeFeedbackFlash: 0,
  selectedStatsDay: 3,
  protectionRunning: false,
  protectionStartedAt: 0,
  protectionAppLabel: "",
  lastUsageSecond: -1,
  usageData: loadUsageData()
};

const statusTime = document.getElementById("statusTime");
const homeWeekday = document.getElementById("homeWeekday");
const homeDate = document.getElementById("homeDate");
const screen = document.querySelector(".screen");
const appScroll = document.querySelector(".app-scroll");
const views = [...document.querySelectorAll(".view")];
const openButtons = [...document.querySelectorAll("[data-open-app]")];
const homeButtons = [...document.querySelectorAll("[data-go-home]")];
const gfPageButtons = [...document.querySelectorAll("[data-gf-page]")];
const gfQuickLinks = [...document.querySelectorAll("[data-gf-page-target]")];
const taskActionButtons = [...document.querySelectorAll("[data-task-action]")];
const previewStageButtons = [...document.querySelectorAll("[data-preview-stage]")];
const gfPages = [...document.querySelectorAll("[data-gf-view]")];
const goalButtons = [...document.querySelectorAll("[data-goal]")];
const styleButtons = [...document.querySelectorAll("[data-style]")];
const presetButtons = [...document.querySelectorAll("[data-plan-preset]")];
const targetAppButtons = [...document.querySelectorAll("[data-target-app]")];
const thresholdSliders = [...document.querySelectorAll("[data-slider-stage]")];
const adjustStageButtons = [...document.querySelectorAll("[data-adjust-stage]")];
const effectButtons = [...document.querySelectorAll("[data-effect]")];
const effectsCount = document.getElementById("effectsCount");
const onboardingPanel = document.getElementById("onboardingPanel");
const startSetupButton = document.getElementById("startSetupButton");
const stage2Value = document.getElementById("stage2Value");
const stage3Value = document.getElementById("stage3Value");
const stage4Value = document.getElementById("stage4Value");
const previewStageValue = document.getElementById("previewStageValue");
const previewFrame = document.getElementById("previewFrame");
const previewVideo = document.getElementById("previewVideo");
const previewSwipeBadge = document.getElementById("previewSwipeBadge");
const previewSwipeValue = document.getElementById("previewSwipeValue");
const overviewGoalLabel = document.getElementById("overviewGoalLabel");
const homeNextCueValue = document.getElementById("homeNextCueValue");
const homeStyleValue = document.getElementById("homeStyleValue");
const startProtectionButton = document.getElementById("startProtectionButton");
const homeProtectionOrb = document.querySelector(".protection-orb");
const homeProtectedKicker = document.getElementById("homeProtectedKicker");
const homeProtectedValue = document.getElementById("homeProtectedValue");
const homePausesValue = document.getElementById("homePausesValue");
const homePausesCopy = document.getElementById("homePausesCopy");
const settingsAppStatus = document.getElementById("settingsAppStatus");
const taskLaunchMeta = document.getElementById("taskLaunchMeta");
const taskGoalChip = document.getElementById("taskGoalChip");
const taskStyleChip = document.getElementById("taskStyleChip");
const taskStage2Hint = document.getElementById("taskStage2Hint");
const taskStage3Hint = document.getElementById("taskStage3Hint");
const taskStage4Hint = document.getElementById("taskStage4Hint");
const taskPreview2Hint = document.getElementById("taskPreview2Hint");
const taskPreview3Hint = document.getElementById("taskPreview3Hint");
const taskPreview4Hint = document.getElementById("taskPreview4Hint");
const statsDayButtons = [...document.querySelectorAll("[data-stats-day]")];
const statsDetailDay = document.getElementById("statsDetailDay");
const statsDetailTitle = document.getElementById("statsDetailTitle");
const statsDetailBadge = document.getElementById("statsDetailBadge");
const statsDetailStops = document.getElementById("statsDetailStops");
const statsDetailRate = document.getElementById("statsDetailRate");
const statsDetailMode = document.getElementById("statsDetailMode");
const statsMomentList = document.getElementById("statsMomentList");
const statsMomentsBadge = document.getElementById("statsMomentsBadge");
const statsSummarySessions = document.getElementById("statsSummarySessions");
const statsSummaryCopy = document.getElementById("statsSummaryCopy");
const statsSummaryTime = document.getElementById("statsSummaryTime");
const statsOpenCount = document.getElementById("statsOpenCount");
const statsStartCount = document.getElementById("statsStartCount");
const statsPauseCount = document.getElementById("statsPauseCount");
const statsSessionsBadge = document.getElementById("statsSessionsBadge");
const statsSessionList = document.getElementById("statsSessionList");
const demoTimer = document.getElementById("demoTimer");
const stagePill = document.getElementById("stagePill");
const stageMessage = document.getElementById("stageMessage");
const swipeFrictionChip = document.getElementById("swipeFrictionChip");
const swipeFrictionValue = document.getElementById("swipeFrictionValue");
const swipeFrictionProgress = document.getElementById("swipeFrictionProgress");
const nextStageButton = document.getElementById("nextStageButton");
const reminderCard = document.getElementById("reminderCard");
const reminderText = document.getElementById("reminderText");
const interventionSheet = document.getElementById("interventionSheet");
const interruptPanel = document.getElementById("interruptPanel");
const interventionTitle = document.getElementById("interventionTitle");
const interventionText = document.getElementById("interventionText");
const selectedEffects = document.getElementById("selectedEffects");
const continueButton = document.getElementById("continueButton");
const takeBreakButton = document.getElementById("takeBreakButton");
const holdProgress = document.getElementById("holdProgress");
const cooldownSheet = document.getElementById("cooldownSheet");
const cooldownTitle = document.getElementById("cooldownTitle");
const cooldownCopy = document.getElementById("cooldownCopy");
const cooldownHomeButton = document.getElementById("cooldownHomeButton");
const returnHomeButton = document.getElementById("returnHomeButton");
const pulseView = document.querySelector("[data-view='pulse']");
const feedViewport = document.getElementById("feedViewport");
const feedTrack = document.getElementById("feedTrack");
const feedLikes = document.getElementById("feedLikes");
const feedComments = document.getElementById("feedComments");
const feedShares = document.getElementById("feedShares");

function formatClock(date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatHomeWeekday(date) {
  return date.toLocaleDateString("en-GB", { weekday: "long" });
}

function formatHomeDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long"
  });
}

function updateStatusTime() {
  const now = new Date();
  if (statusTime) {
    statusTime.textContent = formatClock(now);
  }
  if (homeWeekday) {
    homeWeekday.textContent = formatHomeWeekday(now);
  }
  if (homeDate) {
    homeDate.textContent = formatHomeDate(now);
  }
}

function formatElapsed(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${String(minutes).padStart(2, "0")}:${seconds}`;
}

function formatWatchDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes} min ${seconds} sec`;
}

function formatThreshold(value) {
  return value >= 60 ? `${value / 60} hr` : `${value} min`;
}

function formatUsageDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  }
  return `${seconds}s`;
}

function formatHomeProtectionDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function formatUsageTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatUsageDate(timestamp) {
  return new Date(timestamp).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  });
}

function stageElapsed() {
  return DEMO_MODE ? state.elapsedSeconds : state.elapsedSeconds / 60;
}

function stageValueToElapsedSeconds(value) {
  return DEMO_MODE ? value : value * 60;
}

function orderedEffects() {
  return ["blur", "fade", "tint", "swipe"].filter((effect) => state.effects.has(effect));
}

function humanEffect(effect) {
  return {
    blur: "Blur",
    fade: "Fade",
    tint: "Tint",
    swipe: "Swipe build"
  }[effect];
}

function hasSwipeBuild() {
  return state.effects.has("swipe");
}

function humanGoal(goal) {
  return {
    study: "Study break",
    sleep: "Sleep routine",
    focus: "Focus session"
  }[goal];
}

function humanStyle(style) {
  return {
    gentle: "Gentle",
    balanced: "Balanced",
    firm: "Firm"
  }[style];
}

function saveSettings() {
  window.localStorage.setItem(
    SETTINGS_STORAGE_KEY,
    JSON.stringify({
      settingsVersion: SETTINGS_VERSION,
      monitoredApps: [...state.monitoredApps],
      thresholds: state.thresholds,
      effects: [...state.effects],
      goal: state.goal,
      interventionStyle: state.interventionStyle
    })
  );
}

function saveUsageData() {
  window.localStorage.setItem(
    USAGE_STORAGE_KEY,
    JSON.stringify({
      appOpenCount: state.usageData.appOpenCount,
      protectionStartCount: state.usageData.protectionStartCount,
      cooldownUntil: state.usageData.cooldownUntil,
      sessions: state.usageData.sessions.slice(0, 30)
    })
  );
}

function appNameById(appId) {
  return APP_CONFIG.find((app) => app.id === appId)?.name || "TikTok";
}

function enabledAppIds() {
  return APP_CONFIG.map((app) => app.id).filter((appId) => state.monitoredApps.has(appId));
}

function hasEnabledApps() {
  return enabledAppIds().length > 0;
}

function cooldownRemainingMs() {
  return Math.max(0, state.usageData.cooldownUntil - Date.now());
}

function hasActiveCooldown() {
  return cooldownRemainingMs() > 0;
}

function clearCooldownIfExpired() {
  if (!state.usageData.cooldownUntil || cooldownRemainingMs() > 0) {
    return false;
  }

  state.usageData.cooldownUntil = 0;
  saveUsageData();
  return true;
}

function startBreakCooldown() {
  state.usageData.cooldownUntil = Date.now() + BREAK_COOLDOWN_MS;
  saveUsageData();
}

function formatCooldownRemaining(totalMs) {
  const totalSeconds = Math.max(0, Math.ceil(totalMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function isPulseProtected() {
  return state.monitoredApps.has("pulse");
}

function currentProtectedAppLabel() {
  const appIds = enabledAppIds();
  if (!appIds.length) {
    return "No apps selected";
  }

  const firstName = appNameById(appIds[0]);
  return appIds.length === 1 ? firstName : `${firstName} + ${appIds.length - 1} apps`;
}

function activeProtectionSeconds() {
  if (!state.protectionRunning || !state.protectionStartedAt) {
    return 0;
  }

  return Math.max(1, Math.round((Date.now() - state.protectionStartedAt) / 1000));
}

function totalProtectedSeconds() {
  return state.usageData.sessions.reduce((total, session) => total + session.durationSeconds, 0) + activeProtectionSeconds();
}

function incrementOpenCount() {
  state.usageData.appOpenCount += 1;
  saveUsageData();
}

function stopProtectionSession(result = "Paused") {
  if (!state.protectionRunning || !state.protectionStartedAt) {
    return;
  }

  const endedAt = Date.now();
  state.usageData.sessions.unshift({
    startedAt: state.protectionStartedAt,
    endedAt,
    durationSeconds: Math.max(1, Math.round((endedAt - state.protectionStartedAt) / 1000)),
    result,
    app: state.protectionAppLabel || currentProtectedAppLabel()
  });
  state.usageData.sessions = state.usageData.sessions.slice(0, 30);
  state.protectionRunning = false;
  state.protectionStartedAt = 0;
  state.protectionAppLabel = "";
  saveUsageData();
}

function startProtectionSession() {
  if (hasActiveCooldown()) {
    openPulseAtStage(1);
    return;
  }

  if (!hasEnabledApps()) {
    openGentleShortcut("settings");
    return;
  }

  if (state.protectionRunning) {
    stopProtectionSession();
    syncUsageStats();
    return;
  }

  state.protectionRunning = true;
  state.protectionStartedAt = Date.now();
  state.protectionAppLabel = currentProtectedAppLabel();
  state.usageData.protectionStartCount += 1;
  saveUsageData();
  syncUsageStats();
}

function syncUsageStats() {
  const liveCount = state.protectionRunning ? 1 : 0;
  const recordedCount = state.usageData.sessions.length;
  const totalCount = recordedCount + liveCount;
  const pauseCount = state.usageData.sessions.length;
  const totalDuration = totalProtectedSeconds();
  state.lastUsageSecond = state.protectionRunning ? activeProtectionSeconds() : -1;

  if (startProtectionButton) {
    if (hasActiveCooldown()) {
      startProtectionButton.textContent = "Break active";
    } else if (!hasEnabledApps()) {
      startProtectionButton.textContent = "Start protection";
    } else if (state.protectionRunning) {
      startProtectionButton.textContent = "Stop protection";
    } else {
      startProtectionButton.textContent = "Start protection";
    }
  }

  if (homePausesValue) {
    homePausesValue.textContent = String(pauseCount);
  }
  if (homePausesCopy) {
    homePausesCopy.textContent = pauseCount > 0 ? "Recorded pauses" : "No pauses yet";
  }
  if (homeProtectedValue) {
    homeProtectedValue.textContent = formatHomeProtectionDuration(totalDuration);
  }
  if (homeProtectionOrb) {
    homeProtectionOrb.classList.toggle("is-live", state.protectionRunning);
  }
  if (homeProtectedKicker) {
    homeProtectedKicker.textContent = state.protectionRunning ? "Protection live" : "Protected time";
  }
  if (settingsAppStatus) {
    settingsAppStatus.textContent = state.monitoredApps.has("pulse") ? "Protection on" : "Protection off";
  }
  targetAppButtons.forEach((button) => {
    const isSelected = state.monitoredApps.has(button.dataset.targetApp);
    button.classList.toggle("is-selected", isSelected);
    const status = button.querySelector("[data-app-status]");
    if (status) {
      status.textContent = isSelected ? "Protection on" : "Protection off";
    }
  });
  if (statsSummarySessions) {
    statsSummarySessions.textContent = `${totalCount} ${totalCount === 1 ? "session" : "sessions"}`;
  }
  if (statsSummaryCopy) {
    if (state.protectionRunning) {
      statsSummaryCopy.textContent = "Protection is running now.";
    } else if (recordedCount > 0) {
      statsSummaryCopy.textContent = "Updated each time you use Gentle Friction.";
    } else {
      statsSummaryCopy.textContent = "Start protection to record your first session.";
    }
  }
  if (statsSummaryTime) {
    statsSummaryTime.textContent = formatUsageDuration(totalDuration);
  }
  if (statsOpenCount) {
    statsOpenCount.textContent = String(state.usageData.appOpenCount);
  }
  if (statsStartCount) {
    statsStartCount.textContent = String(state.usageData.protectionStartCount);
  }
  if (statsPauseCount) {
    statsPauseCount.textContent = String(pauseCount);
  }
  if (statsSessionsBadge) {
    statsSessionsBadge.textContent = state.protectionRunning ? "Live" : `${recordedCount} records`;
  }
  if (statsSessionList) {
    const rows = [];

    if (state.protectionRunning) {
      rows.push(`
        <article class="moment-row">
          <span class="moment-time">${formatUsageTime(state.protectionStartedAt)}</span>
          <div class="moment-copy">
            <strong>Live · ${formatUsageDuration(activeProtectionSeconds())}</strong>
            <span>${state.protectionAppLabel || currentProtectedAppLabel()} · Protection on · ${formatUsageDate(state.protectionStartedAt)}</span>
          </div>
        </article>
      `);
    }

    state.usageData.sessions.forEach((session) => {
      rows.push(`
        <article class="moment-row">
          <span class="moment-time">${formatUsageTime(session.startedAt)}</span>
          <div class="moment-copy">
            <strong>${formatUsageDuration(session.durationSeconds)} protected</strong>
            <span>${session.app} · ${session.result} · ${formatUsageDate(session.startedAt)}</span>
          </div>
        </article>
      `);
    });

    if (!rows.length) {
      rows.push(`
        <article class="stats-empty-state">
          <div class="moment-copy">
            <strong>No sessions yet</strong>
            <span>Your next protection session will appear here.</span>
          </div>
        </article>
      `);
    }

    statsSessionList.innerHTML = rows.join("");
  }
}

function getStageByElapsed() {
  const elapsed = stageElapsed();

  if (state.activeView === "pulse" && !isPulseProtected()) {
    return 1;
  }
  if (!hasEnabledApps()) {
    return 1;
  }
  if (elapsed >= state.thresholds[4]) {
    return 4;
  }
  if (elapsed >= state.thresholds[3]) {
    return 3;
  }
  if (elapsed >= state.thresholds[2]) {
    return 2;
  }
  return 1;
}

function getStage3Progress(elapsed = stageElapsed()) {
  if (elapsed < state.thresholds[3]) {
    return 0;
  }

  const stageWindow = Math.max(state.thresholds[4] - state.thresholds[3], 1);
  return Math.min((elapsed - state.thresholds[3]) / stageWindow, 1);
}

function requiredSwipesForProgress(progress) {
  if (!hasSwipeBuild()) {
    return 1;
  }

  return Math.max(1, Math.min(10, 1 + Math.floor(Math.max(0, progress) * 10)));
}

function currentRequiredSwipes() {
  if (!isPulseProtected() || state.currentStage !== 3) {
    return 1;
  }

  return requiredSwipesForProgress(state.stage3Progress);
}

function resetSwipeBuild() {
  state.swipeStepsTowardNext = 0;
  state.swipeFeedbackFlash = 0;
}

function pulseSwipeFeedback() {
  state.swipeFeedbackFlash += 1;
  const flashId = state.swipeFeedbackFlash;
  if (swipeFrictionChip) {
    swipeFrictionChip.classList.add("is-armed");
    swipeFrictionChip.classList.add("is-bumping");
  }
  window.setTimeout(() => {
    if (swipeFrictionChip && flashId === state.swipeFeedbackFlash) {
      swipeFrictionChip.classList.remove("is-bumping");
    }
  }, 240);
}

function setFrictionVisuals(target, progress) {
  if (!target) {
    return;
  }

  const blur = state.effects.has("blur") ? `${progress * 10}px` : "0px";
  const brightness = state.effects.has("fade") ? `${1 - progress * 0.34}` : "1";
  const saturate = state.effects.has("fade") ? `${1 - progress * 0.28}` : "1";
  const tintOpacity = state.effects.has("tint") ? `${progress * 0.56}` : "0";

  target.style.setProperty("--preview-blur", blur);
  target.style.setProperty("--preview-brightness", brightness);
  target.style.setProperty("--preview-saturate", saturate);
  target.style.setProperty("--preview-tint-opacity", tintOpacity);
}

function syncPulseFriction() {
  const progress = state.currentStage >= 3 ? getStage3Progress() : 0;
  state.stage3Progress = progress;

  pulseView.style.setProperty("--stage3-blur", state.effects.has("blur") ? `${progress * 10}px` : "0px");
  pulseView.style.setProperty("--stage3-brightness", state.effects.has("fade") ? `${1 - progress * 0.34}` : "1");
  pulseView.style.setProperty("--stage3-saturate", state.effects.has("fade") ? `${1 - progress * 0.28}` : "1");
  pulseView.style.setProperty("--stage3-tint-opacity", state.effects.has("tint") ? `${progress * 0.56}` : "0");
}

function syncSwipeFrictionUi() {
  if (previewSwipeBadge) {
    previewSwipeBadge.classList.toggle("hidden", !hasSwipeBuild());
  }
  if (previewSwipeValue) {
    const previewSwipes = requiredSwipesForProgress(state.previewProgress);
    previewSwipeValue.textContent = `${previewSwipes} ${previewSwipes === 1 ? "swipe" : "swipes"}`;
  }

  if (!swipeFrictionChip || !swipeFrictionValue || !swipeFrictionProgress) {
    return;
  }

  const showSwipeFriction =
    state.activeView === "pulse" &&
    isPulseProtected() &&
    state.currentStage === 3 &&
    hasSwipeBuild() &&
    !hasActiveCooldown();

  swipeFrictionChip.classList.toggle("hidden", !showSwipeFriction);

  if (!showSwipeFriction) {
    swipeFrictionChip.classList.remove("is-armed", "is-bumping");
    return;
  }

  const required = currentRequiredSwipes();
  const current = Math.min(state.swipeStepsTowardNext, required);
  const remaining = Math.max(required - current, 0);

  swipeFrictionValue.textContent = `${remaining || required} ${remaining === 1 || (!remaining && required === 1) ? "swipe" : "swipes"} left`;
  swipeFrictionProgress.textContent = `${current} / ${required}`;
  swipeFrictionChip.classList.toggle("is-armed", current > 0);
}

function syncPreviewFriction(deltaMs = 1000 / 24) {
  if (!previewStageValue || !previewFrame) {
    return;
  }

  state.previewProgress += 0.015 * state.previewDirection * (deltaMs / (1000 / 24));
  if (state.previewProgress >= 1) {
    state.previewProgress = 1;
    state.previewDirection = -1;
  } else if (state.previewProgress <= 0.08) {
    state.previewProgress = 0.08;
    state.previewDirection = 1;
  }

  previewStageValue.textContent = `${Math.round(state.previewProgress * 100)}%`;
  setFrictionVisuals(previewFrame, state.previewProgress);
  syncSwipeFrictionUi();
}

function clearReminderTimer() {
  window.clearTimeout(state.reminderTimeout);
  state.reminderTimeout = 0;
}

function syncFeedEngagement() {
  const item = FEED_ITEMS[logicalIndex()];
  if (!item) {
    return;
  }

  if (feedLikes) {
    feedLikes.textContent = item.likes;
  }
  if (feedComments) {
    feedComments.textContent = item.comments;
  }
  if (feedShares) {
    feedShares.textContent = item.shares;
  }
}

function primeNearbyFeedVideos() {
  const videos = [...feedTrack.querySelectorAll("video")];
  videos.forEach((video, index) => {
    const distance = Math.abs(index - state.currentVideoIndex);
    if (distance <= 2 && video.dataset.src && video.getAttribute("src") !== video.dataset.src) {
      video.setAttribute("src", video.dataset.src);
      video.load();
    }

    video.preload = distance <= 1 ? "metadata" : "none";
  });
}

function buildFeed() {
  const repeated = [...FEED_ITEMS, ...FEED_ITEMS, ...FEED_ITEMS];
  feedTrack.innerHTML = repeated
    .map(
      (item) => `
        <article class="feed-slide">
          <video data-src="${item.file}" poster="${item.poster}" muted loop playsinline preload="none"></video>
          <div class="slide-overlay"></div>
          <div class="slide-copy">
            <p class="feed-author">${item.author}</p>
            <p class="feed-caption">${item.caption}</p>
          </div>
        </article>
      `
    )
    .join("");

  const height = feedViewport.clientHeight;
  feedTrack.style.height = `${repeated.length * height}px`;
  [...feedTrack.children].forEach((slide, index) => {
    slide.style.height = `${height}px`;
    slide.style.top = `${index * height}px`;
  });

  updateTrackPosition(false);
  syncCurrentSlides();
  playCurrentVideo();
}

function logicalIndex() {
  return ((state.currentVideoIndex % FEED_ITEMS.length) + FEED_ITEMS.length) % FEED_ITEMS.length;
}

function updateTrackPosition(animated = true) {
  const height = feedViewport.clientHeight;
  feedTrack.style.transition = animated
    ? "transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1)"
    : "none";
  feedTrack.style.transform = `translateY(${-state.currentVideoIndex * height + state.trackDragDeltaY}px)`;
}

function syncCurrentSlides() {
  [...feedTrack.children].forEach((slide, index) => {
    slide.classList.toggle("is-current", index === state.currentVideoIndex);
  });
  syncFeedEngagement();
  primeNearbyFeedVideos();
}

function playCurrentVideo() {
  const slides = [...feedTrack.querySelectorAll("video")];

  if (hasActiveCooldown()) {
    slides.forEach((video) => video.pause());
    return;
  }

  slides.forEach((video, index) => {
    if (index === state.currentVideoIndex) {
      if (video.readyState >= 1 && video.currentTime < 0.18) {
        video.currentTime = 0.18;
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

function recenterFeedIfNeeded() {
  const length = FEED_ITEMS.length;
  if (state.currentVideoIndex < length || state.currentVideoIndex >= length * 2) {
    state.currentVideoIndex = length + logicalIndex();
    updateTrackPosition(false);
    syncCurrentSlides();
    playCurrentVideo();
  }
}

function clearReminderAndOffset() {
  clearReminderTimer();
  resetReminderOffset();
}

function resetElapsedClock() {
  state.elapsedCarryMs = 0;
  state.lastLoopAt = performance.now();
}

function resetSession() {
  state.elapsedSeconds = 0;
  state.currentStage = 1;
  state.stage2Dismissed = false;
  resetSwipeBuild();
  resetElapsedClock();
  clearReminderAndOffset();
  resetHold();
  syncUi();
}

function currentPlanPreset() {
  const presetEntry = Object.entries(PLAN_PRESETS).find(([, preset]) =>
    [2, 3, 4].every((stage) => state.thresholds[stage] === preset[stage])
  );

  return presetEntry ? presetEntry[0] : null;
}

function updateControls() {
  if (effectsCount) {
    effectsCount.textContent = String(state.effects.size);
  }
  if (stage2Value) {
    stage2Value.textContent = formatThreshold(state.thresholds[2]);
  }
  if (stage3Value) {
    stage3Value.textContent = formatThreshold(state.thresholds[3]);
  }
  if (stage4Value) {
    stage4Value.textContent = formatThreshold(state.thresholds[4]);
  }
  if (taskLaunchMeta) {
    taskLaunchMeta.textContent = `${humanGoal(state.goal)} / ${humanStyle(state.interventionStyle)}`;
  }
  if (taskGoalChip) {
    taskGoalChip.textContent = humanGoal(state.goal);
  }
  if (taskStyleChip) {
    taskStyleChip.textContent = humanStyle(state.interventionStyle);
  }
  if (taskStage2Hint) {
    taskStage2Hint.textContent = formatThreshold(state.thresholds[2]);
  }
  if (taskStage3Hint) {
    taskStage3Hint.textContent = formatThreshold(state.thresholds[3]);
  }
  if (taskStage4Hint) {
    taskStage4Hint.textContent = formatThreshold(state.thresholds[4]);
  }
  if (taskPreview2Hint) {
    taskPreview2Hint.textContent = formatThreshold(state.thresholds[2]);
  }
  if (taskPreview3Hint) {
    taskPreview3Hint.textContent = formatThreshold(state.thresholds[3]);
  }
  if (taskPreview4Hint) {
    taskPreview4Hint.textContent = formatThreshold(state.thresholds[4]);
  }
  if (overviewGoalLabel) {
    overviewGoalLabel.textContent = humanGoal(state.goal);
  }
  if (homeNextCueValue) {
    homeNextCueValue.textContent = formatThreshold(state.thresholds[2]);
  }
  if (homeStyleValue) {
    homeStyleValue.textContent = humanStyle(state.interventionStyle);
  }
  targetAppButtons.forEach((button) => {
    button.classList.toggle("is-selected", state.monitoredApps.has(button.dataset.targetApp));
  });

  thresholdSliders.forEach((slider) => {
    slider.value = String(state.thresholds[Number(slider.dataset.sliderStage)]);
  });

  effectButtons.forEach((button) => {
    button.classList.toggle("is-selected", state.effects.has(button.dataset.effect));
  });

  goalButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.goal === state.goal);
  });

  styleButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.style === state.interventionStyle);
  });

  const selectedPreset = currentPlanPreset();
  presetButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.planPreset === selectedPreset);
  });
}

function syncStatsDetail() {
  const day = STATS_DAYS[state.selectedStatsDay];
  if (!day) {
    return;
  }

  statsDayButtons.forEach((button, index) => {
    button.classList.toggle("is-selected", index === state.selectedStatsDay);
  });

  if (statsDetailDay) {
    statsDetailDay.textContent = day.fullLabel;
  }
  if (statsDetailTitle) {
    statsDetailTitle.textContent = `${day.protectedMinutes} min protected`;
  }
  if (statsDetailBadge) {
    statsDetailBadge.textContent = day.badge;
  }
  if (statsDetailStops) {
    statsDetailStops.textContent = String(day.stops);
  }
  if (statsDetailRate) {
    statsDetailRate.textContent = `${day.returnRate}%`;
  }
  if (statsDetailMode) {
    statsDetailMode.textContent = day.mode;
  }
  if (statsMomentsBadge) {
    statsMomentsBadge.textContent = `${day.moments.length} moments`;
  }
  if (statsMomentList) {
    statsMomentList.innerHTML = day.moments
      .map(
        (moment) => `
          <article class="moment-row">
            <span class="moment-time">${moment.time}</span>
            <div class="moment-copy">
              <strong>${moment.stage}</strong>
              <span>${moment.result}</span>
            </div>
          </article>
        `
      )
      .join("");
  }
}

function syncOnboarding() {
  if (!onboardingPanel) {
    return;
  }

  onboardingPanel.classList.toggle("hidden", state.onboardingSeen || state.activeView !== "gentle");
}

function setView(view) {
  state.activeView = view;
  screen.dataset.activeView = view;
  resetElapsedClock();

  views.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.view === view);
  });

  if (view === "pulse") {
    updateTrackPosition(false);
    syncCurrentSlides();
    playCurrentVideo();
    syncUi();
  } else {
    [...feedTrack.querySelectorAll("video")].forEach((video) => video.pause());
    resetSession();
  }

  syncOnboarding();
}

function setGentlePage(page) {
  state.gentlePage = page;
  gfPageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.gfPage === page);
  });
  gfPages.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.gfView === page);
  });
  if (appScroll) {
    appScroll.scrollTop = 0;
  }
  syncOnboarding();
}

function openPulseAtStage(stage) {
  state.onboardingSeen = true;
  setView("pulse");
  state.stage2Dismissed = false;

  if (hasActiveCooldown()) {
    state.elapsedSeconds = 0;
    resetElapsedClock();
    clearReminderAndOffset();
    resetHold();
    syncUi();
    return;
  }

  if (!isPulseProtected()) {
    state.elapsedSeconds = 0;
    resetElapsedClock();
    syncUi();
    return;
  }

  if (stage === 1) {
    state.elapsedSeconds = 0;
  } else if (stage === 2) {
    state.elapsedSeconds = stageValueToElapsedSeconds(state.thresholds[2]);
  } else if (stage === 3) {
    const stageWindow = Math.max(state.thresholds[4] - state.thresholds[3], 1);
    const stageValue = Math.min(
      state.thresholds[3] + Math.ceil(stageWindow * 0.6),
      state.thresholds[4] - 1
    );
    state.elapsedSeconds = stageValueToElapsedSeconds(stageValue);
  } else {
    state.elapsedSeconds = stageValueToElapsedSeconds(state.thresholds[4]);
  }

  resetElapsedClock();
  syncUi();
}

function openGentleShortcut(page) {
  state.onboardingSeen = true;
  setView("gentle");
  setGentlePage(page);
}

function renderEffectBadges() {
  if (!selectedEffects) {
    return;
  }

  selectedEffects.innerHTML = "";
  orderedEffects().forEach((effect) => {
    const badge = document.createElement("span");
    badge.textContent = humanEffect(effect);
    selectedEffects.appendChild(badge);
  });
}

function stageMessageText(stage) {
  return {
    1: "Monitoring quietly.",
    2: `You've been watching for ${formatWatchDuration(state.elapsedSeconds)}.`,
    3: `You've been watching for ${formatWatchDuration(state.elapsedSeconds)}.`,
    4: "Keep watching or take a break."
  }[stage];
}

function stageLabel(stage) {
  return {
    1: "Protection on",
    2: "Awareness",
    3: "Soft friction",
    4: "Choice"
  }[stage];
}

function applyStageClasses() {
  pulseView.classList.remove("stage-1", "stage-2", "stage-3", "stage-4");
  pulseView.classList.add(`stage-${state.currentStage}`);
}

function resetReminderOffset() {
  state.reminderOffsetY = 0;
  state.reminderDragStartY = null;
  reminderCard.style.setProperty("--reminder-offset", "0px");
}

function dismissReminder() {
  state.stage2Dismissed = true;
  clearReminderAndOffset();
  reminderCard.classList.add("hidden");
}

function scheduleReminderAutoHide() {
  clearReminderTimer();
  state.reminderTimeout = window.setTimeout(() => {
    if (state.currentStage === 2 && !state.stage2Dismissed) {
      dismissReminder();
    }
  }, REMINDER_AUTO_HIDE_MS);
}

function syncReminderCard() {
  if (hasActiveCooldown() || !isPulseProtected() || state.currentStage !== 2 || state.stage2Dismissed) {
    reminderCard.classList.add("hidden");
    clearReminderAndOffset();
    return;
  }

  reminderCard.classList.remove("hidden");
  reminderText.textContent = `You've been watching for ${formatWatchDuration(state.elapsedSeconds)}.`;
  if (!state.reminderTimeout) {
    scheduleReminderAutoHide();
  }
}

function syncInterventionSheet() {
  if (hasActiveCooldown() || !isPulseProtected() || state.currentStage !== 4) {
    interventionSheet.classList.add("hidden");
    if (interruptPanel) {
      interruptPanel.classList.remove("is-holding");
    }
    return;
  }

  interventionSheet.classList.remove("hidden");
  interventionTitle.textContent = "Keep watching?";
  interventionText.textContent = "Return to the life waiting for you.";
}

function syncCooldownSheet() {
  const cooldownActive = hasActiveCooldown();

  pulseView.classList.toggle("is-cooldown", cooldownActive);

  if (!cooldownSheet) {
    return;
  }

  if (!cooldownActive) {
    cooldownSheet.classList.add("hidden");
    return;
  }

  cooldownSheet.classList.remove("hidden");

  if (cooldownTitle) {
    cooldownTitle.textContent = `Come back in ${formatCooldownRemaining(cooldownRemainingMs())}`;
  }
  if (cooldownCopy) {
    cooldownCopy.textContent = "TikTok is paused so your break can stay a break.";
  }
}

function syncUi() {
  const previousStage = state.currentStage;
  state.currentStage = getStageByElapsed();

  if (previousStage !== state.currentStage && state.currentStage === 2) {
    state.stage2Dismissed = false;
    clearReminderAndOffset();
  }

  if (state.currentStage !== 2) {
    clearReminderAndOffset();
  }

  if (state.currentStage !== 3 || previousStage !== state.currentStage) {
    resetSwipeBuild();
  }

  const cooldownActive = hasActiveCooldown();

  demoTimer.textContent = formatElapsed(state.elapsedSeconds);
  stagePill.textContent = cooldownActive ? "Break active" : (isPulseProtected() ? stageLabel(state.currentStage) : "Protection off");
  stagePill.classList.toggle("hidden", !(cooldownActive || isPulseProtected()));
  nextStageButton.classList.toggle("hidden", !isPulseProtected() || cooldownActive);
  demoTimer.classList.toggle("hidden", !isPulseProtected() || cooldownActive);
  stageMessage.textContent = cooldownActive ? "" : (isPulseProtected() ? stageMessageText(state.currentStage) : "");
  stageMessage.classList.toggle("hidden", cooldownActive || !isPulseProtected() || state.currentStage === 1);
  applyStageClasses();
  syncPulseFriction();
  syncSwipeFrictionUi();
  syncReminderCard();
  syncInterventionSheet();
  syncCooldownSheet();
}

function resetHold() {
  cancelAnimationFrame(state.holdFrame);
  state.holdFrame = 0;
  state.holdStart = 0;
  holdProgress.style.width = "0%";
  if (interruptPanel) {
    interruptPanel.classList.remove("is-holding");
  }
}

function completeContinue() {
  resetHold();
  state.elapsedSeconds = 0;
  state.stage2Dismissed = false;
  resetElapsedClock();
  clearReminderAndOffset();
  syncUi();
  commitTrackMove(1);
}

function holdStep(timestamp) {
  if (!state.holdStart) {
    state.holdStart = timestamp;
  }

  const progress = Math.min((timestamp - state.holdStart) / HOLD_DURATION_STAGE_4, 1);
  holdProgress.style.width = `${progress * 100}%`;

  if (progress >= 1) {
    completeContinue();
    return;
  }

  state.holdFrame = requestAnimationFrame(holdStep);
}

function startContinue() {
  if (state.currentStage !== 4) {
    return;
  }

  resetHold();
  if (interruptPanel) {
    interruptPanel.classList.add("is-holding");
  }
  state.holdFrame = requestAnimationFrame(holdStep);
}

function stopContinue() {
  resetHold();
}

function setThreshold(stage, value) {
  const minimumGap = 5;
  state.thresholds[stage] = value;

  if (stage === 2 && state.thresholds[3] <= value) {
    state.thresholds[3] = value + minimumGap;
  }
  if (stage <= 3 && state.thresholds[4] <= state.thresholds[3]) {
    state.thresholds[4] = state.thresholds[3] + minimumGap;
  }
  if (stage === 4 && state.thresholds[3] >= value) {
    state.thresholds[3] = value - minimumGap;
  }
  if (state.thresholds[2] >= state.thresholds[3]) {
    state.thresholds[2] = state.thresholds[3] - minimumGap;
  }

  state.thresholds[2] = Math.min(Math.max(state.thresholds[2], 5), 30);
  state.thresholds[3] = Math.min(Math.max(state.thresholds[3], 10), 60);
  state.thresholds[4] = Math.min(Math.max(state.thresholds[4], 15), 90);

  saveSettings();
  updateControls();
  syncUi();
}

function jumpToNextStage() {
  if (!isPulseProtected()) {
    return;
  }

  if (state.currentStage === 1) {
    state.elapsedSeconds = stageValueToElapsedSeconds(state.thresholds[2]);
  } else if (state.currentStage === 2) {
    const stageWindow = Math.max(state.thresholds[4] - state.thresholds[3], 1);
    const stageValue = Math.min(
      state.thresholds[3] + Math.ceil(stageWindow * 0.6),
      state.thresholds[4] - 1
    );
    state.elapsedSeconds = stageValueToElapsedSeconds(stageValue);
  } else if (state.currentStage === 3) {
    state.elapsedSeconds = stageValueToElapsedSeconds(state.thresholds[4]);
  } else {
    state.elapsedSeconds = 0;
    state.stage2Dismissed = false;
  }

  resetElapsedClock();
  syncUi();
}

function startReminderDrag(event) {
  if (state.currentStage !== 2) {
    return;
  }

  state.reminderDragStartY = event.clientY;
  reminderCard.setPointerCapture(event.pointerId);
}

function moveReminderDrag(event) {
  if (state.reminderDragStartY === null) {
    return;
  }

  state.reminderOffsetY = Math.max(event.clientY - state.reminderDragStartY, 0);
  reminderCard.style.setProperty("--reminder-offset", `${state.reminderOffsetY}px`);
}

function endReminderDrag(event) {
  if (state.reminderDragStartY === null) {
    return;
  }

  reminderCard.releasePointerCapture(event.pointerId);

  if (state.reminderOffsetY >= REMINDER_DISMISS_THRESHOLD) {
    dismissReminder();
    return;
  }

  resetReminderOffset();
}

function commitTrackMove(direction) {
  if (state.trackAnimating || state.currentStage === 4 || hasActiveCooldown()) {
    return;
  }

  resetSwipeBuild();
  state.trackAnimating = true;
  state.currentVideoIndex += direction;
  state.trackDragDeltaY = 0;
  updateTrackPosition(true);

  window.setTimeout(() => {
    state.trackAnimating = false;
    recenterFeedIfNeeded();
    syncCurrentSlides();
    playCurrentVideo();
  }, 330);
}

function requestTrackMove(direction) {
  if (state.trackAnimating || state.currentStage === 4 || hasActiveCooldown()) {
    return;
  }

  if (state.currentStage !== 3 || !hasSwipeBuild() || !isPulseProtected()) {
    commitTrackMove(direction);
    return;
  }

  const required = currentRequiredSwipes();
  if (required <= 1) {
    commitTrackMove(direction);
    return;
  }

  state.swipeStepsTowardNext += 1;

  if (state.swipeStepsTowardNext >= required) {
    commitTrackMove(direction);
    syncSwipeFrictionUi();
    return;
  }

  pulseSwipeFeedback();
  updateTrackPosition(true);
  syncSwipeFrictionUi();
}

function onTrackPointerDown(event) {
  if (state.currentStage === 4 || state.trackAnimating || hasActiveCooldown()) {
    return;
  }

  state.trackDragStartY = event.clientY;
  state.trackDragDeltaY = 0;
  feedViewport.setPointerCapture(event.pointerId);
}

function onTrackPointerMove(event) {
  if (state.trackDragStartY === null || state.currentStage === 4 || state.trackAnimating || hasActiveCooldown()) {
    return;
  }

  state.trackDragDeltaY = event.clientY - state.trackDragStartY;
  updateTrackPosition(false);
}

function onTrackPointerUp(event) {
  if (state.trackDragStartY === null) {
    return;
  }

  feedViewport.releasePointerCapture(event.pointerId);
  const deltaY = state.trackDragDeltaY;
  state.trackDragStartY = null;
  state.trackDragDeltaY = 0;

  if (Math.abs(deltaY) < VIDEO_SWIPE_THRESHOLD) {
    updateTrackPosition(true);
    return;
  }

  requestTrackMove(deltaY < 0 ? 1 : -1);
}

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.openApp === "pulse") {
      openPulseAtStage(1);
      return;
    }
    setView(button.dataset.openApp);
  });
});

homeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setView("home");
  });
});

gfPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGentlePage(button.dataset.gfPage);
  });
});

gfQuickLinks.forEach((button) => {
  button.addEventListener("click", () => {
    setGentlePage(button.dataset.gfPageTarget);
  });
});

taskActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.taskAction === "start-protected") {
      startProtectionSession();
      return;
    }
    if (button.dataset.taskAction === "open-settings") {
      openGentleShortcut("settings");
      return;
    }
    if (button.dataset.taskAction === "open-stats") {
      openGentleShortcut("insights");
    }
  });
});

previewStageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openGentleShortcut("settings");
  });
});

targetAppButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const appId = button.dataset.targetApp;
    if (!appId) {
      return;
    }

    if (state.monitoredApps.has(appId)) {
      state.monitoredApps.delete(appId);
    } else {
      state.monitoredApps.add(appId);
    }

    if (appId === "pulse") {
      state.elapsedSeconds = 0;
      state.stage2Dismissed = false;
      clearReminderAndOffset();
      resetHold();
      resetElapsedClock();
    }

    if (!hasEnabledApps() && state.protectionRunning) {
      stopProtectionSession("Stopped in settings");
    }

    saveSettings();
    updateControls();
    syncUi();
    syncUsageStats();
  });
});

thresholdSliders.forEach((slider) => {
  slider.addEventListener("input", () => {
    setThreshold(Number(slider.dataset.sliderStage), Number(slider.value));
  });
});

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const preset = PLAN_PRESETS[button.dataset.planPreset];
    if (!preset) {
      return;
    }

    state.thresholds = { 2: preset[2], 3: preset[3], 4: preset[4] };
    saveSettings();
    updateControls();
    syncUi();
  });
});

adjustStageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const stage = Number(button.dataset.adjustStage);
    const direction = Number(button.dataset.adjustDirection || 0);
    setThreshold(stage, state.thresholds[stage] + direction * 5);
  });
});

effectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const effect = button.dataset.effect;
    if (state.effects.has(effect)) {
      state.effects.delete(effect);
    } else {
      state.effects.add(effect);
    }
    saveSettings();
    updateControls();
    syncUi();
  });
});

goalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.goal = button.dataset.goal;
    saveSettings();
    updateControls();
  });
});

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.interventionStyle = button.dataset.style;
    saveSettings();
    updateControls();
  });
});

statsDayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedStatsDay = Number(button.dataset.statsDay);
    syncStatsDetail();
  });
});

startSetupButton.addEventListener("click", () => {
  state.onboardingSeen = true;
  syncOnboarding();
  setGentlePage("settings");
});

nextStageButton.addEventListener("click", jumpToNextStage);
reminderCard.addEventListener("pointerdown", startReminderDrag);
reminderCard.addEventListener("pointermove", moveReminderDrag);
reminderCard.addEventListener("pointerup", endReminderDrag);
reminderCard.addEventListener("pointercancel", endReminderDrag);

feedViewport.addEventListener("pointerdown", onTrackPointerDown);
feedViewport.addEventListener("pointermove", onTrackPointerMove);
feedViewport.addEventListener("pointerup", onTrackPointerUp);
feedViewport.addEventListener("pointercancel", onTrackPointerUp);

continueButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  startContinue();
});

["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
  continueButton.addEventListener(eventName, stopContinue);
});

if (returnHomeButton) {
  returnHomeButton.addEventListener("click", () => {
    if (state.protectionRunning) {
      stopProtectionSession("Returned home");
      syncUsageStats();
    }
    setView("home");
  });
}

takeBreakButton.addEventListener("click", () => {
  if (state.protectionRunning) {
    stopProtectionSession("Took a break");
  }
  startBreakCooldown();
  syncUsageStats();
  syncUi();
  setView("home");
});

if (cooldownHomeButton) {
  cooldownHomeButton.addEventListener("click", () => {
    setView("home");
  });
}

window.addEventListener("beforeunload", () => {
  if (state.protectionRunning) {
    stopProtectionSession("Closed app");
  }
});

window.addEventListener(
  "wheel",
  (event) => {
    if (state.activeView !== "pulse" || state.currentStage === 4 || state.trackAnimating || hasActiveCooldown()) {
      return;
    }

    if (Math.abs(event.deltaY) < 18) {
      return;
    }

    event.preventDefault();
    requestTrackMove(event.deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (state.activeView !== "pulse" || state.currentStage === 4 || state.trackAnimating || hasActiveCooldown()) {
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    requestTrackMove(-1);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    requestTrackMove(1);
  }
});

window.setInterval(() => {
  const now = performance.now();
  const deltaMs = now - state.lastLoopAt;
  state.lastLoopAt = now;

  updateStatusTime();

  if (state.activeView === "pulse" && isPulseProtected() && state.currentStage < 4 && !hasActiveCooldown()) {
    state.elapsedCarryMs += deltaMs;
    if (state.elapsedCarryMs >= 1000) {
      const wholeSeconds = Math.floor(state.elapsedCarryMs / 1000);
      state.elapsedSeconds += wholeSeconds;
      state.elapsedCarryMs -= wholeSeconds * 1000;
      syncUi();
    }
  }

  if (state.usageData.cooldownUntil) {
    if (clearCooldownIfExpired()) {
      syncUsageStats();
      syncUi();
    } else if (state.activeView === "pulse") {
      syncUi();
    }
  }

  if (state.activeView === "gentle") {
    syncPreviewFriction(deltaMs);
  }

  if (state.protectionRunning) {
    const liveSecond = activeProtectionSeconds();
    if (liveSecond !== state.lastUsageSecond) {
      syncUsageStats();
    }
  }
}, 1000 / 24);

window.addEventListener("resize", () => {
  buildFeed();
});

feedTrack.addEventListener(
  "loadeddata",
  (event) => {
    const video = event.target;
    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    if (video.currentTime < 0.18) {
      video.currentTime = 0.18;
    }

    const currentVideo = feedTrack.querySelector(".feed-slide.is-current video");
    if (currentVideo === video) {
      video.play().catch(() => {});
    }
  },
  true
);

if (previewVideo) {
  previewVideo.addEventListener("loadeddata", () => {
    if (previewVideo.currentTime < 0.18) {
      previewVideo.currentTime = 0.18;
    }
    previewVideo.play().catch(() => {});
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    resetHold();
    clearReminderAndOffset();
  } else {
    resetElapsedClock();
    if (previewVideo) {
      previewVideo.play().catch(() => {});
    }
    playCurrentVideo();
  }
});

window.addEventListener("blur", () => {
  resetElapsedClock();
  resetHold();
  clearReminderAndOffset();
});

updateStatusTime();
document.body.classList.toggle("is-demo-mode", DEMO_MODE);
buildFeed();
incrementOpenCount();
setGentlePage("overview");
updateControls();
syncUsageStats();
if (previewStageValue && previewFrame) {
  syncPreviewFriction();
}
syncUi();
setView("home");
