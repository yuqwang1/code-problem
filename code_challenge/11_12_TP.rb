#TechPipeline
#tree find visible node, visible node is node which value is greater or equal to root value
class TreeNode
  attr_accessor :x, :r, :l

  def initialize(value)
    @x = value
    @r = nil
    @l = nil
  end

end

myTree = TreeNode.new(5)
myTree.l = TreeNode.new(3)
myTree.l.l = TreeNode.new(20)
myTree.l.r = TreeNode.new(21)
myTree.r = TreeNode.new(10)
myTree.r.l = TreeNode.new(1)

def count_visible_rec(tree, max_so_far = nil)
  return 0 if tree == nil
  max_so_far ||= tree.x

  if max_so_far <= tree.x
    sub_trees =
    count_visible(tree.l, tree.x) +
    count_visible(tree.r, tree.x);

    sub_trees + 1
  else
    sub_trees =
    count_visible(tree.l, max_so_far) +
    count_visible(tree.r, max_so_far);

    sub_trees
  end
end

def count_visible_iter(tree)
  return 0 if tree.nil?

  stack = [[tree, tree.x]]
  count = 0

  while stack.length > 0
    current = stack.pop
    if current.first.x >= current.last
      count += 1
    end

    max_so_far = [current.first.x, current.last].max
    if current.first.l
      stack << [current.first.l, max_so_far]
    end

    if current.first.r
      stack << [current.first.r, max_so_far]
    end
  end

  count

end

count_visible_iter(myTree)


#Cut tree problem, ex [3,4,5,4] return 2 since take out 5, new array [3,4,4] is sorted increasingly,
# take out the second 4, new array [3,4,5] is sorted increasingly
#[4,5,1,2,3] return 0
#[2,3,4,5,1] return 1
#[1,2,2,3,4,5,6] return 7

def cutTree(array)
  if array.sort == array
    return array.length
  end
  array_copied = array.dup
  i = 0
  count = 0
  while i <= array.length
    array = array_copied.dup
    array.delete_at(i)
    if (array == array.sort)
      count += 1
    end
    i += 1
  end
  return count
end
