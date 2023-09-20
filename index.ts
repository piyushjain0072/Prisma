import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Tejal Patil',
    //         email: 'tejal.patil@gmail.com'
    //     }
    // });

    // Get all users
    // const users = await prisma.user.findMany();

    // Create an article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Title1',
    //         body: 'Body1',
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // });

    // Get all articles
    // const articles = await prisma.article.findMany();

    // Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bijay Jain',
    //         email: 'bijay.jain@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Rich Dad Poor Dad',
    //                 body: 'Finance book'
    //             }
    //         }
    //     }
    // });

    // Get user and its associated articles
    // const users = await prisma.user.findMany({
    //     include: { articles: true }
    // });

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: 'Xcellent Piyush'
    //     }
    // });

    // Remove data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2
    //     }
    // });
    // console.log(articles);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit();
    });