
#import this
#class Parser:
from urllib.request import urlopen
from bs4 import BeautifulSoup


class Stack:

	def __init__(self):
	    self.items = []
	
	def isEmpty(self):
	    return self.items == []
	
	def push(self, item):
		self.items.insert(0,item)

	def getTheFuckOutOfTheStack(self):
		return self.items.pop(0)

	def peek(self):
	    return self.items[0]

	def size(self):
	    return len(self.items)
	
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    # def sortedArrayToBST(self, nums):
    #     """
    #     :type nums: List[int]
    #     :rtype: TreeNode
    #     """
    #     # Recursion with slicing
    #     if not nums:
    #         return None
    #     mid = len(nums) / 2
    #     root = TreeNode(nums[mid])
    #     root.left = self.sortedArrayToBST(nums[:mid])
    #     root.right = self.sortedArrayToBST(nums[mid + 1:])
    #     return root

    def sortedArrayToBST(self, divs):
        # Recursion with index
        return self.getHelper(nums, 0, len(nums) - 1)

    def getHelper(self, nums, start, end):
        if start > end:
            return None
        mid = (start + end) / 2
        node = TreeNode(nums[mid])
        node.left = self.getHelper(nums, start, mid - 1)
        node.right = self.getHelper(nums, mid + 1, end)
        return node

if __name__ == '__main__':
	# begin
	html=urlopen("http://pythonscraping.com/pages/page1.html")
	response = html.read()

	html_soup = BeautifulSoup(response, 'html.parser')
	divs = html_soup.find_all('div')
	h1s = html_soup.find_all('h1')

	type(html_soup)

	s = Stack()
	toTree = Solution()
	tree = TreeNode()

	for x in divs:
		s.push(x)

	for y in h1s:
		s.push(y)


	print(s.getTheFuckOutOfTheStack())
	print(s.getTheFuckOutOfTheStack())