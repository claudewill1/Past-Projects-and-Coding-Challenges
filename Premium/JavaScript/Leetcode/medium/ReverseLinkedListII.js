const reverseBetween = (head, m, n) => {
    if (!head) {
        return null;
    }

    let prev = null;
    let current = head;

    while(m > 1) {
        prev = current;
        current = current.next;
        m--;
        n--;
    }

    let connection = prev;
    let tail = current;

    while (n > 0) {
        let next_node = current.next;
        current.next = prev;
        prev = current;
        current = next_node;
        n--;
    }

    if (connection) {
        connection.next = prev;
    } else {
        head = prev;
    }

    tail.next = current;

    return head;
}