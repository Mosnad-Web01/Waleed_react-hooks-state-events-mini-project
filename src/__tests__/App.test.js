//this file is addedd by me wal
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import { CATEGORIES, TASKS } from "../data";
import "@testing-library/jest-dom";

test("renders task list and adds a new task", () => {
  render(<App />);

  // Check if main elements are in the document
  expect(screen.getByText(/my tasks/i)).toBeInTheDocument(); // This should work if jest-dom is set up correctly

  // Check if existing tasks are displayed
  TASKS.forEach((task) => {
    expect(screen.getByText(task.text)).toBeInTheDocument();
  });

  // Add a new task
  fireEvent.change(screen.getByPlaceholderText(/new task/i), {
    target: { value: "New Task" },
  });

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: CATEGORIES[1] }, // Select a category
  });

  fireEvent.click(screen.getByRole("button", { name: /add task/i }));

  // Check if the new task is displayed
  expect(screen.getByText("New Task")).toBeInTheDocument();
});
