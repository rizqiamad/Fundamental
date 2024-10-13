class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    let res:number[] = []
    inorder(root, res)
    return res
};

function inorder(node: TreeNode | null, arr: number[]):void {
    if(node === null) return

    inorder(node.left, arr)

    arr.push(node.val)

    inorder(node.right, arr)
}

const root:TreeNode = new TreeNode(1,null,new TreeNode(2,new TreeNode(3)))

console.log(inorderTraversal(root))