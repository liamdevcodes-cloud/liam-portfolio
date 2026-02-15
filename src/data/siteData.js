import {
  FaAws,
  FaCloud,
  FaCode,
  FaDatabase,
  FaGithub,
  FaJava,
  FaLinux,
  FaNetworkWired,
  FaPython,
  FaRobot,
  FaShieldAlt,
  FaTools,
  FaWindows,
} from 'react-icons/fa'
import { TbBrandPowershell } from 'react-icons/tb'

export const profile = {
  name: 'Liam',
  title: 'ICT Specialist / Network Engineer in Training',
  intro:
    'Ambitious ICT professional with a strong foundation in network management, systems administration, and technical troubleshooting. Completed MBO Netwerkbeheer and currently pursuing a Bachelor in HBO-ICT to expand engineering and software skills.',
  location: 'Zuidwolde, Netherlands',
  github: 'https://github.com/liamdevcodes-cloud',
  linkedin: '',
  email: 'liam.dev.codes@gmail.com',
  cvPath: '/Liam-CV.pdf',
  profileImage: '/logo/logo.png',
  iconCloud: [
    { label: 'Windows', icon: FaWindows },
    { label: 'Linux', icon: FaLinux },
    { label: 'Python', icon: FaPython },
    { label: 'Java', icon: FaJava },
    { label: 'Automation', icon: FaCode },
    { label: 'Security', icon: FaShieldAlt },
    { label: 'GitHub', icon: FaGithub },
    { label: 'AWS', icon: FaAws },
  ],
}

export const highlights = [
  { label: 'Infrastructure Focus', value: 'Networks, servers, and secure operations' },
  { label: 'Education Track', value: 'MBO Netwerkbeheer + HBO-ICT' },
  { label: 'Engineering Skills', value: 'PowerShell, Python, Java, and system automation' },
]

export const skills = [
  { name: 'Network Management & Infrastructure', level: 88, icon: FaNetworkWired },
  { name: 'Server Administration (Windows/Linux)', level: 84, icon: FaDatabase },
  { name: 'Networking (TCP/IP, VLAN, DNS, DHCP)', level: 90, icon: FaNetworkWired },
  { name: 'Cybersecurity Fundamentals', level: 76, icon: FaShieldAlt },
  { name: 'PowerShell Scripting', level: 78, icon: TbBrandPowershell },
  { name: 'Python Programming', level: 72, icon: FaPython },
  { name: 'Java Programming', level: 75, icon: FaJava },
  { name: 'MCP Server Development', level: 70, icon: FaRobot },
  { name: 'IT Troubleshooting & Optimization', level: 89, icon: FaTools },
  { name: 'Cloud Basics (Azure / AWS)', level: 68, icon: FaCloud },
]

export const iconCloud = [
  { label: 'Windows', icon: FaWindows },
  { label: 'Linux', icon: FaLinux },
  { label: 'Java', icon: FaJava },
  { label: 'Automation', icon: FaCode },
  { label: 'Security', icon: FaShieldAlt },
  { label: 'GitHub', icon: FaGithub },
  { label: 'AWS', icon: FaAws },
]

export const projects = [
  {
    title: 'SMB Network Segmentation Lab',
    summary:
      'Designed a segmented VLAN architecture with inter-VLAN routing, hardened firewall policies, and DNS/DHCP services for a simulated office environment.',
    stack: ['VLAN', 'TCP/IP', 'DHCP', 'DNS', 'Firewall Rules'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/liamdevcodes-cloud',
    demo: 'https://github.com/liamdevcodes-cloud',
  },
  {
    title: 'PowerShell Health Monitor',
    summary:
      'Built a script set to monitor Windows server uptime, services, and disk states with automatic reporting for preventive maintenance.',
    stack: ['PowerShell', 'Windows Server', 'Task Scheduler'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/liamdevcodes-cloud',
    demo: 'https://github.com/liamdevcodes-cloud',
  },
  {
    title: 'Python Network Diagnostics Toolkit',
    summary:
      'Developed a modular troubleshooting toolkit for DNS checks, latency tests, subnet validation, and service reachability diagnostics.',
    stack: ['Python', 'Sockets', 'CLI', 'Automation'],
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/liamdevcodes-cloud',
    demo: 'https://github.com/liamdevcodes-cloud',
  },
]

export const education = [
  {
    program: 'MBO Netwerkbeheer',
    institution: 'Deltion College',
    period: 'Completed (year can be added)',
    details:
      'Developed practical skills in networking fundamentals, server operations, and IT support workflows.',
  },
  {
    program: 'HBO-ICT',
    institution: 'Windesheim University of Applied Sciences',
    period: 'Started (start year) - Expected graduation (expected year)',
    details:
      'Expanding engineering depth in software development, systems design, and applied ICT innovation.',
  },
]
