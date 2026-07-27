import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const assemblyConfig: LanguageConfig = {
  title: 'Assembly',
  language: 'assembly',
  tutorialData: [
        {
      id: 'basics',
      title: 'Assembly Basics',
      description: 'Learn Assembly Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World (x86-64 NASM)',
      description: 'syscall write.',
      content: `section .text
global _start
_start:
    mov rax, 1      ; sys_write
    mov rdi, 1      ; stdout
    mov rsi, msg
    mov rdx, 13
    syscall
    mov rax, 60     ; sys_exit
    xor rdi, rdi
    syscall
section .data
msg db 'Hello, World!', 10`,
      output: `Hello, World!`,
    },
            {
      id: 'registers',
      title: 'Registers',
      description: 'General-purpose regs.',
      content: `mov rax, 5      ; rax = 5
mov rbx, 10     ; rbx = 10
add rax, rbx     ; rax = 15`,
      output: `(rax = 15)`,
    },
            {
      id: 'mov',
      title: 'MOV',
      description: 'Load/store values.',
      content: `mov rax, 42     ; immediate
mov rbx, rax    ; register-to-register`,
      output: `(rbx = 42)`,
    },
      ],
    },
        {
      id: 'arithmetic',
      title: 'Arithmetic',
      description: 'Learn Arithmetic',
      content: `    {`,
      subtopics: [
            {
      id: 'add-sub',
      title: 'ADD / SUB',
      description: 'Integer math.',
      content: `mov rax, 10
sub rax, 3       ; rax = 7
add rax, 1       ; rax = 8`,
      output: `(rax = 8)`,
    },
            {
      id: 'mul',
      title: 'MUL / IMUL',
      description: 'Multiplication.',
      content: `mov rax, 6
mov rbx, 7
imul rax, rbx    ; rax = 42`,
      output: `(rax = 42)`,
    },
            {
      id: 'div',
      title: 'DIV',
      description: 'Division & remainder.',
      content: `mov rax, 43
xor rdx, rdx
mov rbx, 5
div rbx          ; rax=8, rdx=3`,
      output: `(rax = 8, rdx = 3)`,
    },
      ],
    },
        {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'Learn Control Flow',
      content: `    {`,
      subtopics: [
            {
      id: 'cmp',
      title: 'CMP / JMP',
      description: 'Compare & branch.',
      content: `mov rax, 10
cmp rax, 5
jg  .big       ; jump if greater
.big:
    nop`,
      output: `(jumped)`,
    },
            {
      id: 'loop',
      title: 'Loop with ECX',
      description: 'Decrement & jump.',
      content: `mov rcx, 3
.loop:
    ; do work
    loop .loop     ; rcx--, jmp if != 0`,
      output: `(3 iterations)`,
    },
      ],
    },
        {
      id: 'stack',
      title: 'Stack',
      description: 'Learn Stack',
      content: `    {`,
      subtopics: [
            {
      id: 'push-pop',
      title: 'PUSH / POP',
      description: 'Call frames.',
      content: `push rax        ; save
push rbx
pop rbx         ; restore
pop rax`,
      output: `(balanced)`,
    },
            {
      id: 'call',
      title: 'CALL / RET',
      description: 'Subroutines.',
      content: `call myfunc     ; push return addr
myfunc:
    ret`,
      output: `(returns)`,
    },
      ],
    },
        {
      id: 'data',
      title: 'Data & Memory',
      description: 'Learn Data & Memory',
      content: `    {`,
      subtopics: [
            {
      id: 'data',
      title: 'DB / DW / DD',
      description: 'Define data.',
      content: `section .data
msg db "hi", 0
count dd 42`,
      output: `(defined)`,
    },
            {
      id: 'lea',
      title: 'LEA',
      description: 'Load effective address.',
      content: `lea rax, [rbp - 8]  ; address of local`,
      output: `(address loaded)`,
    },
      ],
    },
        {
      id: 'syscalls',
      title: 'Linux Syscalls',
      description: 'Learn Linux Syscalls',
      content: `    {`,
      subtopics: [
            {
      id: 'write',
      title: 'sys_write',
      description: 'File descriptor 1.',
      content: `mov rax, 1      ; sys_write
mov rdi, 1      ; fd
syscall`,
      output: `(writes)`,
    },
            {
      id: 'exit',
      title: 'sys_exit',
      description: 'Terminate.',
      content: `mov rax, 60     ; sys_exit
xor rdi, rdi    ; code 0
syscall`,
      output: `(exits)`,
    },
      ],
    },
  ],
};
