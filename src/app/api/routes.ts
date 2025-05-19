import {getAllPost} from '@/app/lib/queries/queries'

export async function GET() {
  const post = await getAllPost()
}