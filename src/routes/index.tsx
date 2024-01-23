import { Navigate, Route, Routes } from "react-router-dom";
import { WidgetHome } from "../interfaces/widget/home";
import { InitialLayout } from "../interfaces/layout/Initial";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<InitialLayout />}>
        <Route index element={<WidgetHome />} />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
}
