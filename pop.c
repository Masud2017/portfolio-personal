#include<stdio.h>
#include<malloc.h>
#include<stdlib.h>
#include<string.h>

struct Node {
	int data;
	struct Node* next;
};

void printList(struct Node n) {
	while(n != NULL) {
		printf("%d",n->data);
		n = n->next;
	}
}

void push(struct Node** head_ref, int data) {
	struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
	new_node->data = data;
	new_node->next = *(head_re)f;
	*(head_re)f = new_node;
}

int main(void) {
	push(&head,34);
	printList(head);
	return 0;
}
