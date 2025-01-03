#include <stdio.h>

#define MAX_SIZE 5

int stack[MAX_SIZE];
int top = -1;

void push(int value) {
    if (top >= MAX_SIZE - 1) {
        printf("Stack overflow. Cannot push %d to the stack.\n", value);
        return;
    }
    stack[++top] = value;
    printf("Pushed %d to the stack.\n", value);
}

int pop() {
    if (top < 0) {
        printf("Stack underflow. No element to pop.\n");
        return -1;
    }
    int value = stack[top--];
    printf("Popped %d from the stack.\n", value);
    return value;
}

int main() {
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);
   

    pop();
    pop();
    pop();
    pop();
    pop();
    

    return 0;
}