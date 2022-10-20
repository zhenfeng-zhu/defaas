import axiod from "axiod";
import { importString } from "import";

export type User = {
  uid: number;
  name: string;
  createdAt: string;
};

export const users: User[] = [
  { uid: 1, name: "john doe", createdAt: "2020-01-01T00:00:00.000Z" },
  { uid: 2, name: "mike johnson", createdAt: "2020-01-02T00:00:00.000Z" },
  { uid: 3, name: "mary jane", createdAt: "2020-01-03T00:00:00.000Z" },
  { uid: 4, name: "larry wall", createdAt: "2020-01-04T00:00:00.000Z" },
];

export const GET = (req: Request) => {
  const url = new URL(req.url);
  return Response.json(
    users.map((user) => ({ ...user, url: `${url.origin}/users/${user.uid}` })),
  );
};

export const POST = async (_req: Request) => {
  const payload = await _req.json();
  let gist_id = "51ceeefe042a23dc6c0f218ec415ff16";
  if (payload.gist_id) {
    gist_id = payload.gist_id;
  }

  const result = await axiod.get(`https://api.github.com/gists/${gist_id}`);
  const files = result.data.files;

  const content = files[payload.func].content;
  const mod = await importString(`${content}`);
  const data = await mod.handler(...payload.params);
  return Response.json({ data });
};
