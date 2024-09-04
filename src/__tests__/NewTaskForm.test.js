import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.click(screen.getByRole("button", { name: /add task/i })); // Click the button

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const codeCount = screen.queryAllByText(/Code/).length;

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.click(screen.getByRole("button", { name: /add task/i })); // Click the button

  expect(screen.getByText(/Pass the tests/)).toBeInTheDocument();
  expect(screen.queryAllByText(/Code/).length).toBe(codeCount + 1);
});
