const fs = require('fs');
const path = require('path');

const postsDirectory = './posts';

if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory);
  console.log('Created the "posts" directory.');
}

function createPost(title, content) {
  const postFileName = `${title.toLowerCase().replace(/\s/g, '_')}.txt`;
  const postFilePath = path.join(postsDirectory, postFileName);

  const data = `Title: ${title}\n\n${content}`;

  fs.writeFileSync(postFilePath, data);
  console.log('Blog post created successfully.');
}

function readPost(postFileName) {
  const postFilePath = path.join(postsDirectory, postFileName);

  try {
    const data = fs.readFileSync(postFilePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading the blog post:', error);
  }
}

function updatePost(postFileName, newContent) {
  const postFilePath = path.join(postsDirectory, postFileName);

  try {
    fs.writeFileSync(postFilePath, newContent);
    console.log('Blog post updated successfully.');
  } catch (error) {
    console.error('Error updating the blog post:', error);
  }
}

function deletePost(postFileName) {
  const postFilePath = path.join(postsDirectory, postFileName);

  try {
    fs.unlinkSync(postFilePath);
    console.log('Blog post deleted successfully.');
  } catch (error) {
    console.error('Error deleting the blog post:', error);
  }
}

createPost('First Post', 'This is the content of my first blog post.');
createPost('Second Post', 'This is the content of my second blog post.');
createPost('Third Post', 'This is the content of my third blog post.');

readPost('./first_post.txt');

updatePost('./second_post.txt', 'Updated content for the second post.');

deletePost('./third_post.txt');
