import { DockItemType, MenuItemType } from "./types";

import Finder from "../components/Windows/Finder.vue";
import Safari from "../components/Windows/Safari.vue";
import Settings from "../components/Windows/Settings.vue";

export const TopBarMenu: MenuItemType[] = [
  {
    label: `<i style="font-size: 20px; color: var(--text)" class="bx bxl-apple" ></i>`,
    children: [
      "About This Mac",
      null,
      "System Preference...",
      "App Store...",
      null,
      "Recent Items",
      null,
      "Force Quit",
      null,
      "Sleep",
      "Restart...",
      "Shut Down...",
      null,
      "Lock Screen",
      "Log out",
    ],
  },
  {
    label: "Finder",
    children: [
      "About Finder",
      null,
      "Preference...",
      null,
      "Empty Trash...",
      null,
      "Services",
      null,
      "Hide Finder",
      "Hide Others",
      "Show All",
    ],
  },
  {
    label: "File",
    children: [
      "New Finder Window",
      "New Folder",
      "New Folder with Selection",
      "New Smart Folder",
      "New Tab",
      "Open in New Tab",
      "Open With",
      "Close Window",
      null,
      "Get Summary Info",
      "Rename",
      "Compress",
      "Duplicate",
      "Make Alias",
      "Quick Look",
      "Print",
      null,
      "Share",
      null,
      "Show Original",
      "Add to Dock",
      null,
      "Move to Trash",
      "Eject",
      null,
      "Tags...",
      "Find by Name...",
    ],
  },
  {
    label: "Edit",
    children: [
      "Undo",
      "Redo",
      null,
      "Cut",
      "Copy",
      "Paste",
      "Select All",
      null,
      "Show Clipboard",
      null,
      "Start Dictation",
      "Emoji & Symbols",
    ],
  },
  {
    label: "View",
    children: [
      "as Icons",
      "as List",
      "as Columns",
      "as Gallery",
      null,
      "Use Stacks",
      "Sort By",
      "Clean Up",
      "Clean Up By",
      null,
      "Hide Sidebar",
      "Hide Preview",
      null,
      "Hide Toolbar",
      "Show All Tabs",
      "Hide Tab Bar",
      "Hide Path Bar",
      "Hide Status Bar",
      null,
      "Customize Toolbar...",
      null,
      "Show View Options",
      "Show Preview Options",
      null,
      "Enter Full Screen",
    ],
  },

  {
    label: "Go",
    children: [
      "Back",
      "Forward",
      "Enclosing Folder",
      null,
      "Recents",
      "Documents",
      "Desktop",
      "Downloads",
      "Home",
      "Computers",
      "AirDrop",
      "Network",
      "iCloud Drive",
      "Applications",
      "Utilities",
      null,
      "Recent Folders",
      null,
      "Go to Folders",
      "Connect to Server...",
    ],
  },
  {
    label: "Window",
    children: [
      "Minimize",
      "Zoom",
      "Move Window to Left Side of Screen",
      "Move Window to Right Side of Screen",
      "Cycle Through Windows",
      null,
      "Show Previous Tab",
      "Show Next Tab",
      "Move Tab to New Window",
      "Merge All Windows",
      null,
      "Bring All to Front",
    ],
  },
  {
    label: "Help",
    children: [
      "macOS Help",
      null,
      "See What's New in macOS",
      "New to Mac? Tour the Basics",
      "Get to know your MacBook",
    ],
  },
];

export const DockMenu: DockItemType[] = [
  {
    name: "Finder",
    icon: "/dock/finder.png",
    type: "component",
    component: Finder,
    position: {
      top: "100px",
      left: "20%",
    },
  },
  {
    name: "Calculator",
    icon: "/dock/calculator.png",
    type: "iframe",
    iframe: {
      url: "https://calculator-1.com/outdoor/?f=2d3135&r=2d3135",
      width: 217,
      height: 302,
    },
    background: "#2d3135",
    position: {
      top: "150px",
      left: "30%",
    },
  },
  {
    name: "Calendar",
    icon: "/dock/calendar.png",
    type: "iframe",
    iframe: {
      url: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHo_Chi_Minh&showTitle=0&showTabs=1&showTz=0&showCalendars=0&showPrint=0&showNav=1&mode=MONTH",
      width: 400,
      height: 300,
    },
    background: "#FFFFFF",
    position: {
      top: "100px",
      left: "40%",
    },
  },
  {
    name: "VSCode",
    icon: "/dock/vscode.png",
    type: "iframe",
    iframe: {
      url: "https://vscode.dev/",
      width: 800,
      height: 500,
    },
    background: "#252526",
    position: {
      top: "50px",
      left: "20%",
    },
  },
  {
    name: "App Store",
    icon: "/dockj/appstore.png",
    type: "iframe",
    iframe: {
      url: "https://en.wikipedia.org/wiki/App_Store_(iOS/iPadOS)",
      width: 600,
      height: 400,
    },
    background: "#FFFFFF",
    position: {
      top: "100px",
      left: "40%",
    },
  },
  {
    name: "Safari",
    icon: "/dock/safari.png",
    type: "component",
    component: Safari,
    position: {
      top: "100px",
      left: "300px",
    },
  },
  {
    name: "System Preference",
    icon: "/dock/setting.png",
    type: "component",
    component: Settings,
    position: {
      top: "100px",
      left: "300px",
    },
  },
  {
    name: "Github",
    icon: "/dock/github.png",
    type: "link",
    link: "https://github.com/napthedev",
  },
  {
    name: "Facebook",
    icon: "/dock/facebook.png",
    type: "link",
    link: "https://facebook.com/napthedev",
  },
];
