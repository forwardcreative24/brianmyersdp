// Everything about you lives here. Change a line, push, and every page follows.
export const site = {
  name: 'Brian Myers',
  // Your title. Shown next to (or under) your name in the header, in page titles and in link previews.
  title: 'DP & Director',
  // How the header shows your name: 'name' (just the name), 'inline' (name, then the title in grey on the same line)
  // or 'stacked' (the title on a small line under the name).
  wordmark: 'inline' as 'name' | 'inline' | 'stacked',

  // The home page opener. Each entry is one line; the second one is set in grey.
  statement: ['I shoot commercials, and sometimes direct them.', 'Careful with light, calm on set.'],
  // A silent loop that plays full width under the statement (an .mp4 in public/video/), and the still shown until it plays.
  // Set reelLoop to '' for no video on the home page.
  reelLoop: '/video/mwa.mp4',
  reelPoster: '/images/mwafcu/kickball-hero.jpg',
  // Vimeo ID of a full reel with sound. Adds a "Watch the reel" button over the loop. Leave '' to hide it.
  reel: '',

  description:
    'Brian Myers is a director of photography and director based in Fort Wayne, Indiana, shooting commercials and branded content for directors, agencies and brands.',
  email: 'brian@brianmyersdp.com',
  phone: '765.637.3760',
  location: 'Fort Wayne, Indiana',
  instagram: 'https://www.instagram.com/brianmyersdp',
  // Web3Forms access key (free at web3forms.com). Until it's set, the contact form opens an email instead.
  formKey: '',

  clients: ['Xfinity', 'Cummins', 'RAM', 'Pacers', 'Scout Motors', "Chili's", 'Shure', "Campbell's", 'Lilly', "DICK'S"],

  // Buttons above the work grid. Each one shows the projects whose role, type or tags match its label.
  // Set to [] to hide the buttons.
  filters: ['All', 'Director & DP', 'DP', 'Music videos', 'Personal'],
};

// Main menu, shared by the header and the phone menu.
export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/gear/', label: 'Gear' },
  { href: '/contact/', label: 'Contact' },
];
