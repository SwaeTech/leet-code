import heapq

minHeap = []
heapq.heappush(minHeap,3)

#by default heaps are min heaps
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 2)
heapq.heappush(minHeap, 4)

# min is always at index 0
# print(minHeap[0])

# print(minHeap) # [2, 3, 3, 4]

while len(minHeap):
	print(heapq.heappop(minHeap))
	# values printed from smallest to largest
