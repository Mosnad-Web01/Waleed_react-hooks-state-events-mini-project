import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task"; // Adjust the import path as necessary
import "@testing-library/jest-dom"; // Ensure this is imported for the toBeInTheDocument matcher

test("displays the task text and category", () => {
  const mockTask = { id: 1, text: "Sample Task", category: "Code" };
  const mockDeleteTask = jest.fn();

  render(<Task task={mockTask} onDeleteTask={mockDeleteTask} />);

  // Check if task text is rendered
  expect(screen.getByText(mockTask.text)).toBeInTheDocument();

  // Check if task category is rendered
  expect(screen.getByText(mockTask.category)).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const mockTask = { id: 1, text: "Sample Task", category: "Code" };
  const mockDeleteTask = jest.fn();

  render(<Task task={mockTask} onDeleteTask={mockDeleteTask} />);

  // Click the delete button
  fireEvent.click(screen.getByText(/delete/i));

  // Check if delete function was called
  expect(mockDeleteTask).toHaveBeenCalledWith(mockTask.id);
});
