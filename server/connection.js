import MongoClient from "mongodb";
async function main() {
    const uri="mongodb+srv://adminN:123456Asm3@cluster0.gndejdj.mongodb.net/test";

    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);