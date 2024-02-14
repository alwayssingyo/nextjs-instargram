import { defineType } from 'sanity';

export default defineType({
  name: 'Post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'User',
        },
      ],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'User' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Autor',
              name: 'author',
              type: 'reference',
              to: [{ type: 'User' }],
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
});
