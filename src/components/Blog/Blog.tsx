import { Box, InputAdornment, Pagination, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { CardContent } from './CardContent/CardContent';

function Blog() {
  const ExampleMockContent = [
    {
      title: 'Testando uma nova forma 1',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 2',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 3',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 4',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 5',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 6',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 7',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 8',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 9',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
    {
      title: 'Testando uma nova forma 10',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      likes: 10,
      comments: 5,
      date: '2021-10-10',
      image: 'https://picsum.photos/200/300',
      author: 'Author 1',
      socialMedia: {
        twitter: 'https://www.twitter.com/author1',
        linkedin: 'https://www.linkedin.com/in/fernando-mos',
        github: 'https://github.com/fernandomospf'
      }
    },
  ];

  const START = 0;
  const LIMIT = 5;
  const filterItens = ExampleMockContent.slice(START, LIMIT)
  
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '15px'}}>
      <Paper sx={{ width: '100%', padding: '10px', backgroundColor: '#d5d1d12f', borderRadius: '10px'}}>
        <TextField
          id="input-with-icon-textfield"
          fullWidth
          placeholder="Search blog post..."
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </Paper>
      <Box>
        <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '35px', backgroundColor: '#d5d1d12f', padding: '30px', borderRadius: '10px', height: '750px', overflow: 'auto'}}>
          {
            filterItens.map((content, index) => (
              <CardContent 
                key={index}
                title={content.title}
                content={content.content}
                likes={content.likes}
                date={content.date}
                image={content.image}
                author={content.author}
              />
            ))
          }
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '10px'
          }}>
            <Pagination 
              count={(+ExampleMockContent.length / 5)} 
              size="small" 
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Blog