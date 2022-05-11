import type { NextPage } from "next";
import { Button, Stack } from "@mui/material";
import { useGetPostsQuery } from "@services/app.service";

const Home: NextPage = () => {
  const x = useGetPostsQuery("1");
  return (
    <Stack direction="row">
      <Button variant="contained">詳細をみる</Button>
    </Stack>
  );
};

export default Home;
