import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 新規作成
async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice1@prisma.io',
    },
  })
  console.log(user)
}

// 取得
async function fetchUsers() {
  const users = await prisma.user.findMany()
  console.log(users)
}

// ユーザと記事を同時に作成する
async function createUserAndPost() {
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
        },
      },
    },
  })
  console.log(user)
}

// ユーザと各ユーザの記事も同時に取得する
async function fetchUsersWithPosts() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

fetchUsers()
  .then(async (res) => {
    // undefined
    console.log(res)
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })