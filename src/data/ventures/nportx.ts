import type { Venture } from "./index";

export const nportx: Venture = {
  id: "nportx",
  name: "NportX",
  tagline: "Find and kill processes hogging your ports. Instantly.",
  description: "A fast, cross-platform CLI that shows you exactly what's running on every port — and lets you kill it in one command.",
  logo: "/logos/nportx.png", // You'll need to add this image
  status: "live",
  url: "https://github.com/nxt3r/nportx",
  tags: ["CLI", "Port", "Developer Tools", "Cross Platform", "Rust"],
  year: 2026,
content: [
  {
    type: "heading",
    text: "A smaller tool for a frustrating problem"
  },
  {
    type: "paragraph",
    text: "NportX is a command-line tool built by Nx Conglo to solve a specific problem developers run into while working locally: a port is already occupied, a development server refuses to start, and figuring out what is using that port becomes another task on an already crowded list."
  },
  {
    type: "paragraph",
    text: "It is a small problem, but one that interrupts the work around it. Developers often end up switching between commands, checking process IDs, looking up unfamiliar output, and manually terminating processes just to get back to what they were doing. NportX brings those steps into one focused interface, making it easier to identify the process behind a port and decide what to do next."
  },
  {
    type: "paragraph",
    text: "The goal was not to build another all-purpose system utility. It was to make one recurring part of the development workflow less tedious, more predictable, and easier to handle."
  },
  {
    type: "heading",
    text: "Built around how developers actually work"
  },
  {
    type: "paragraph",
    text: "NportX follows three principles: focus, safety, and convenience. It should do its job without introducing an elaborate setup process, expose useful information without making users piece together several different commands, and treat process termination as an action that deserves care rather than something to execute blindly."
  },
  {
    type: "paragraph",
    text: "That philosophy also shaped its packaging. NportX is distributed as a single, lightweight executable rather than requiring developers to assemble a complicated environment before they can use it. Development already involves enough moving parts; a utility intended to remove friction should not create another layer of it."
  },
  {
    type: "paragraph",
    text: "The released v0.1.0 binary is approximately 896 KB. The small footprint is a practical design choice, not a claim that size alone makes a tool better. The important part is that developers can access the functionality without taking on an unnecessary setup burden."
  },
  {
    type: "heading",
    text: "What NportX can do today"
  },
  {
    type: "paragraph",
    text: "The first release provides five commands for inspecting and managing listening TCP ports:"
  },
  {
    type: "list",
    items: [
      "list — displays listening TCP ports alongside the associated process name, process ID (PID), and memory information, with color distinctions for system and user processes.",
      "who <port> — identifies the process and PID associated with a specified port.",
      "kill <port> — attempts to terminate the process occupying a port, after asking for confirmation.",
      "check <port> — checks whether a port is free and returns an exit code that scripts can use: 0 when free and 1 when occupied.",
      "watch — provides a live view of listening ports, with a configurable refresh interval through the -i option."
    ]
  },
  {
    type: "paragraph",
    text: "Together, these commands cover the core workflow: inspect the current situation, identify what is occupying a port, check availability before starting a service, monitor changes, and terminate a conflicting process when appropriate. The check command also makes NportX useful beyond interactive terminal sessions, where a simple exit code can be incorporated into shell scripts."
  },
  {
    type: "heading",
    text: "Process management with safety in mind"
  },
  {
    type: "paragraph",
    text: "Identifying a process is useful; terminating the wrong one can create a much bigger problem. NportX therefore includes safeguards around the information it collects and the actions it permits."
  },
  {
    type: "paragraph",
    text: "The current Windows implementation filters out sockets that are not in the listening state and deduplicates ports that may otherwise appear multiple times because of interface-specific socket entries. It also skips PID 0 and processes whose identity is reported as unknown, avoiding misleading or unusable process entries."
  },
  {
    type: "paragraph",
    text: "The kill command requires explicit confirmation before proceeding. In addition, a critical-process guard blocks attempts to terminate protected Windows processes, including processes such as System, lsass.exe, and svchost.exe. These protections are intended to make the command more deliberate and reduce the risk of an avoidable mistake."
  },
  {
    type: "paragraph",
    text: "These safeguards are not a guarantee that every process termination is harmless. They are part of a broader design principle: a convenient tool should still respect the consequences of the actions it enables."
  },
  {
    type: "heading",
    text: "Learning Rust by building a real product"
  },
  {
    type: "paragraph",
    text: "NportX was also a practical way to learn Rust beyond isolated examples. Rather than treating the language as a separate learning exercise, the project used a concrete developer problem to explore CLI design, process information, operating-system networking data, error handling, and release packaging in a working application."
  },
  {
    type: "paragraph",
    text: "The implementation uses clap for command-line argument parsing, netstat2 for socket information, sysinfo for process details, colored for terminal output, and anyhow for error handling. Each library supports a specific part of the tool, while the application brings them together behind a consistent command interface."
  },
  {
    type: "paragraph",
    text: "The result is more than a proof of concept or a collection of commands. NportX has a versioned release, a public repository, and installation routes that make it available to other developers. Building it provided a way to learn the language while working through the practical decisions involved in shipping a usable utility."
  },
  {
    type: "heading",
    text: "Released, installable, and still developing"
  },
  {
    type: "paragraph",
    text: "NportX v0.1.0 has been published through GitHub Releases, Crates.io, and Scoop. The public repository contains the project, while the dedicated Scoop bucket provides a convenient installation route for Windows users."
  },
  {
    type: "paragraph",
    text: "The current release has been verified on Windows. Although cross-platform support is part of the project's direction, macOS and Linux prebuilt release support remains work to be completed. NportX should therefore be understood as a working Windows release with a broader platform goal, not as a finished cross-platform product."
  },
  {
    type: "paragraph",
    text: "The project is continuing beyond its initial release. The next stage is about extending the existing foundation carefully: broadening platform support, improving the interaction model, and adding capabilities where they meaningfully reduce friction for developers."
  },
  {
    type: "heading",
    text: "Where it goes next"
  },
  {
    type: "paragraph",
    text: "The roadmap focuses on two connected areas: making NportX available across more environments and making common port-management workflows more efficient."
  },
  {
    type: "list",
    items: [
      "Cross-platform releases — build and publish prebuilt releases for macOS and Linux alongside Windows.",
      "Interactive terminal interface — explore a TUI built with ratatui and crossterm, with a navigable port table, refresh controls, search, and keyboard-driven actions.",
      "Shell completions — add completion support for Bash, Zsh, Fish, and PowerShell.",
      "Expanded process controls — introduce an optional force-kill workflow while preserving deliberate process-management behavior.",
      "Project-aware port detection — explore using project files such as .env and package.json to make port conflicts easier to understand in context.",
      "Homebrew distribution — add a more convenient installation route for macOS users."
    ]
  },
  {
    type: "paragraph",
    text: "These are planned improvements, not features available in the current release. The priority is to build on what already works without losing the simplicity that motivated the project in the first place."
  },
  {
    type: "heading",
    text: "A focused tool with a clear purpose"
  },
  {
    type: "paragraph",
    text: "NportX is a product of Nx Conglo, conceived as a focused developer utility before development began. Its value does not depend on an elaborate origin story. It starts with a practical observation: small workflow interruptions can consume attention out of proportion to the problem itself."
  },
  {
    type: "paragraph",
    text: "By bringing port inspection, process identification, availability checks, monitoring, and guarded termination into one lightweight CLI, NportX aims to remove one of those interruptions. Its first release establishes the core workflow; continued development will determine how well that experience can extend across platforms and more complex development setups."
  },
  {
    type: "paragraph",
    text: "The long-term direction is straightforward: a reliable, lightweight, cross-platform tool that helps developers spend less time untangling port conflicts and more time doing the work those ports were needed for."
  },
    {
    type: "heading",
    text: "Project links"
  },
  {
    type: "link",
    text: "GitHub Repository",
    url: "https://github.com/nxt3r/nportx"
  },
  {
    type: "link",
    text: "Scoop Bucket",
    url: "https://github.com/nxt3r/scoop-nportx"
  },
  {
    type: "link",
    text: "Crates.io Package",
    url: "https://crates.io/crates/nportx"
  },
  {
    type: "link",
    text: "GitHub Releases",
    url: "https://github.com/nxt3r/nportx/releases"
  }
 ]
};
