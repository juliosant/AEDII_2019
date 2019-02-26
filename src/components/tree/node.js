export default class Node {
    constructor(key, parent = null) {
        this.key = key
        this.leftChild = null
        this.rightChild = null
        this.parent = parent
    }
    isRoot(){
        return this.parent == null
    }

    depth(){
        if(this.isRoot()){
            return 0
        }
        return this.parent.depth() + 1
    }  

}


