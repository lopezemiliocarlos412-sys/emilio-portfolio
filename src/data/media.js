// Excel projects: banner images are already in public/images/excel/.
// Add a real `href` to each (a file path in public/files/, or a Google
// Sheets share link) to activate the "View file" button.

export const excelProjects = [
  {
    id: 'excel-keyword-bucket-analysis',
    title: 'Keyword Bucket Analysis',
    subtitle: 'Sorting search data into title, bullets, and backend keywords.',
    banner: '/images/excel/keyword-bucket-analysis.jpg',
    href: '/files/PPC keyword Mock Up.csv',
  },
  {
    id: 'excel-asin-teardown',
    title: 'ASIN Teardown & Listing Rebuild',
    subtitle: 'Reverse-engineering a top seller, keyword by keyword.',
    banner: '/images/excel/asin-teardown-rebuild.jpg',
    href: '/files/project1_single_asin_teardown(Analysis & Recommendations).csv',
  },
  {
    id: 'excel-ppc-keyword-research',
    title: 'Amazon PPC & Keyword Research',
    subtitle: 'Data-backed listings that rank and convert.',
    banner: '/images/excel/amazon-ppc-keyword-research.jpg',
    href: '/files/Keyword Bucket Analysis Title, Bullets & Backend Mapping (Raw Exported Keywords (Helium))(Raw Exported Keywords (Helium)).csv',
  },
]

// Content & editing projects: drop your real .mp4 files into public/videos/
// using the exact filenames below (or update the `video` path to match
// whatever you name them). The card auto-shows the video's own first frame
// as a thumbnail, so no separate poster image is needed.

export const contentProjects = [
  {
    id: 'video-listing-walkthrough',
    title: 'Dont Half Ass it | Short-Form Video Edit',
    subtitle: "A fast-paced edit built for hook, retention, and pacing on social.",
    video: '/videos/Short_Form_Video_1.mov',
  },
  {
    id: 'video-eturismo-demo',
    title: 'It Is Easy to Give Up! | Short-Form Video Edit',
    subtitle: "A talking-head short-form video edited for a personal, authentic feel",
    video: '/videos/Short-Form-Video-2.mp4',
  },
  {
    id: 'video-case-routing',
    title: 'UGC Tiktok Ad | FIFINE A6V',
    subtitle: 'Streamer or Gamer this microphone is your best Partner!',
    video: '/videos/ssstik.io_@yourcomputersetup_1791015559545.mp4',
  },
]
