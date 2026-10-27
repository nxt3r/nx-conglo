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
content: 
[
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
    text: "The current binary is approximately 1.5 MB. The small footprint is a practical design choice, not a claim that size alone makes a tool better. The important part is that developers can access the functionality without taking on an unnecessary setup burden."
  },
  {
    type: "heading",
    text: "What NportX can do today"
  },
  {
    type: "paragraph",
    text: "NportX provides commands for inspecting and managing listening ports, checking availability, exporting information, and detecting expected project ports, alongside an interactive terminal interface:"
  },
  {
    type: "list",
    items: [
      "list — displays listening ports alongside process names, process IDs (PIDs), and memory information. Use --udp to include UDP sockets, and identify Docker-backed ports by their actual container name.",
      "who <port> — identifies the process and PID associated with a specified port.",
      "kill <port> — attempts to terminate the process occupying a port, after asking for confirmation. The -f or --force option skips confirmation for automated workflows.",
      "kill --name <name> — finds listening-port processes matching a process name and asks for confirmation before terminating the matches.",
      "check <port> — checks whether a port is free and returns an exit code that scripts can use: 0 when free and 1 when occupied.",
      "free <port> — finds the next available port starting from the specified port number.",
      "export json and export csv — outputs port information in structured formats for logging, reporting, or use in other tools.",
      "watch — provides an interactive, live view of listening ports, with keyboard navigation, search, manual refresh, and process termination. The refresh interval is configurable through the -i option.",
      "doctor — inspects project files such as .env, package.json, and docker-compose.yml to identify expected ports and cross-check them against ports currently in use.",
      "completions — generates shell completion scripts for Bash, Zsh, Fish, and PowerShell."
    ]
  },
  {
    type: "paragraph",
    text: "Together, these commands cover the core workflow: inspect the current situation, identify what is occupying a port, check availability before starting a service, find a free port, monitor changes, export information, and terminate a conflicting process when appropriate. Project-aware detection adds context by comparing expected ports with actual listeners, while Docker Compose awareness helps identify host ports used by multi-container applications. Shell completions make commands easier to enter, and predictable exit codes and structured output make NportX useful in scripts as well as interactive terminal sessions."
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
    text: "NportX focuses on relevant listening-port information, distinguishes system and user processes in its output, and recognizes Docker-backed ports so developers can identify the container behind a port instead of seeing only an intermediary process. Its optional UDP view extends inspection beyond TCP when a workflow requires it."
  },
  {
    type: "paragraph",
    text: "The kill commands require explicit confirmation by default. The optional force flag allows the prompt to be skipped when automation requires it. A critical-process guard blocks attempts to terminate protected processes, including processes such as System, lsass.exe, and csrss.exe. These protections are intended to make the command more deliberate and reduce the risk of an avoidable mistake."
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
    text: "NportX was also a practical way to learn Rust beyond isolated examples. Rather than treating the language as a separate learning exercise, the project used a concrete developer problem to explore CLI design, process information, operating-system networking data, error handling, terminal interfaces, and release packaging in a working application."
  },
  {
    type: "paragraph",
    text: "The implementation uses clap for command-line argument parsing, netstat2 for socket information, sysinfo for process details, colored for terminal output, and anyhow for error handling. The interactive terminal interface builds on ratatui and crossterm. Each library supports a specific part of the tool, while the application brings them together behind a consistent command interface."
  },
  {
    type: "paragraph",
    text: "The result is more than a proof of concept or a collection of commands. NportX has versioned releases, a public repository, and multiple installation routes that make it available to other developers. Building it provided a way to learn the language while working through the practical decisions involved in shipping a usable utility."
  },
  {
    type: "heading",
    text: "Released, installable, and still developing"
  },
  {
    type: "paragraph",
    text: "NportX v0.4.0 is available through GitHub Releases, Crates.io, Homebrew, and Scoop. A one-line installation script is also available for macOS and Linux. The dedicated Scoop bucket provides a convenient installation route for Windows users, while Homebrew supports macOS installation."
  },
  {
    type: "paragraph",
    text: "NportX supports Windows, macOS, and Linux through prebuilt releases, with Intel and ARM architectures supported where available. The project has expanded beyond its original Windows implementation while retaining its focus on a lightweight executable and a consistent command interface."
  },
  {
    type: "paragraph",
    text: "The project continues beyond each release. The latest version expands the original port-management workflow with UDP inspection, structured JSON and CSV exports, free-port discovery, process-name-based termination, and deeper project awareness through Docker Compose detection."
  },
  {
    type: "heading",
    text: "Where it goes next"
  },
  {
    type: "paragraph",
    text: "The next stage is about extending the existing foundation carefully: making port-dependent workflows easier to automate, improving visibility into port usage, and expanding integrations where they meaningfully reduce friction for developers."
  },
  {
    type: "list",
    items: [
      "nportx wait <port> — wait until a port becomes free, useful for scripts that need to wait before starting another process.",
      "nportx stats — provide a live dashboard for port and process information.",
      "Native Linux packages — explore apt and dnf distribution for Debian/Ubuntu and Fedora.",
      "Windows package distribution — pursue availability through the official Windows Package Manager using winget.",
      "VS Code integration — explore an extension that uses nportx doctor in the background and warns about port conflicts before development servers start.",
      "Interactive process selection — explore a guided way to choose which matching processes to terminate."
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
    text: "By bringing port inspection, process identification, availability checks, monitoring, project-aware detection, structured exports, UDP support, free-port discovery, and guarded termination into one lightweight CLI, NportX aims to remove one of those interruptions. Its interactive terminal interface makes the workflow easier to navigate, while Docker awareness helps developers understand port conflicts in containerized environments."
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
    text: "Homebrew",
    url: "https://github.com/nxt3r/homebrew-nportx"
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
] as const
};
