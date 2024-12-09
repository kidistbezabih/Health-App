t = int(input())

for _ in range(t):
  n = int(input())
  res = -1

  for i in range(1, n):
    if len(set(bin(i)[2:])) == 1:
      res -= (i+1)
    else:
      res += (i+1)
  print(res)
