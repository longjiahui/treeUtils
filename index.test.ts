import { traverse } from "./index"

test("traverse find", () => {
  const datas = [
    {
      id: 1,
      name: "1",
      children: [
        {
          id: 2,
          name: "2",
        },
        {
          id: 3,
          name: "3",
          children: [
            {
              id: 4,
              name: "4",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "5",
    },
  ]
  const d4 = traverse(datas, (d) => (d.id === 4 ? d : undefined))
  expect(d4?.id).toBe(4)
  expect(d4?.name).toBe("4")
})
