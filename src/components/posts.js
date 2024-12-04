/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */

const posts = [
  {
    id: 1,
    title: 'Titolo del Post',
    image: "https://picsum.photos/200/300",
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html', 'css'],
    published: true,
  },
  {
    id: 2,
    title: 'Anonimo',
    image: undefined,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['js', 'css'],
    published: true,
  },
  {
    id: 3,
    title: 'Titolo del Post',
    image: "https://picsum.photos/200/300",
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['js', 'php'],
    published: true,
  },
  {
    id: 4,
    title: 'Titolo del Post',
    image: "https://picsum.photos/200/300",
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html'],
    published: false,
  },
]

export default posts