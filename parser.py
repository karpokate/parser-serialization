
#import this
#class Parser:
from urllib.request import urlopen
html=urlopen("http://pythonscraping.com/pages/page1.html")
print(html.read())


class Stack:

	def __init__(self):
	    self.items = []
	
	def isEmpty(self):
	    return self.items == []
	
	def push(self, item):
		self.items.insert(0,item)

	def zzz(self):
		return self.items.pop(0)

	def peek(self):
	    return self.items[0]

	def size(self):
	    return len(self.items)
	
s = Stack()
s.push('hello')
s.push('true')
print(s.zzz())
