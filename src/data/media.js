// Add a real link for each item:
// - videos: a YouTube/Loom/Vimeo URL, or a path like /videos/clip.mp4 (place the file in /public/videos)
// - excel: a path like /files/tracker.xlsx (place the file in /public/files) or a Google Sheets share link

export const mediaItems = [
  {
    id: 'video-listing-walkthrough',
    type: 'video',
    title: 'Product Listing Walkthrough',
    subtitle: "Screen-recorded demo of optimizing a listing's title, bullets, and images for search.",
    href: '',
  },
  {
    id: 'video-eturismo-demo',
    type: 'video',
    title: 'eTurismo Admin Panel Demo',
    subtitle: "A walkthrough of the tourism platform's data entry and validation workflow.",
    href: '',
  },
  {
    id: 'video-case-routing',
    type: 'video',
    title: 'Order & Case Routing Process',
    subtitle: 'How cases get sorted, prioritized, and routed for faster response times.',
    href: '',
  },
  {
    id: 'excel-audit-reconciliation',
    type: 'excel',
    title: 'Audit Reconciliation Template',
    subtitle: 'Formula-driven template that cross-checks totals and flags discrepancies.',
    href: '',
  },
  {
    id: 'excel-inventory-tracker',
    type: 'excel',
    title: 'Inventory & Order Tracker',
    subtitle: 'A tracking sheet for monitoring stock levels and order status at a glance.',
    href: '',
  },
  {
    id: 'excel-case-tracker',
    type: 'excel',
    title: 'Case Prioritization Tracker',
    subtitle: 'Sheet-based system for sorting and routing support tickets by urgency.',
    href: '',
  },
]
