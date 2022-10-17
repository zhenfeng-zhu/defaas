import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "https://esm.sh/@mui/material?alias=react:preact/compat,react/jsx-runtime:preact/compat/jsx-runtime&deps=preact@10.11.0";
import ExpandMoreIcon from "https://esm.sh/@mui/icons-material/ExpandMore?alias=react:preact/compat,react/jsx-runtime:preact/compat/jsx-runtime&deps=preact@10.11.0";

interface CounterProps {
  start: number;
}

export default function Hello(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      setCount(i);
    }
  }, []);

  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
