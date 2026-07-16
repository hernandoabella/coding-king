import x86asm from 'react-syntax-highlighter/dist/esm/languages/hljs/x86asm';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('x86asm', x86asm);

export const assemblyConfig = {
  title: "NASM Assembly Tutorial",
  language: 'x86asm',
  tutorialData: [
  {
    id: 'basics',
    title: 'NASM Assembly Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'A simple program to print "Hello, World!" to the console in NASM.',
        content: `section .data
msg db "Hello, World!", 0xA
len equ $ - msg

section .text
global _start

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, len
    int 0x80

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Hello, World!\n"
      },
      {
        id: 'registers',
        title: 'Registers',
        description: 'Understanding x86 CPU registers and their uses.',
        content: `; x86 general-purpose registers
; EAX - accumulator (syscall number / return value)
; EBX - base (first argument)
; ECX - counter (second argument)
; EDX - data (third argument)
; ESI - source index
; EDI - destination index
; ESP - stack pointer
; EBP - base pointer

section .text
global _start

_start:
    mov eax, 42        ; load 42 into EAX
    mov ebx, eax       ; copy EAX to EBX
    mov ecx, 10        ; load 10 into ECX
    add ebx, ecx       ; EBX = 42 + 10 = 52
    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Registers loaded; EBX = 52"
      },
      {
        id: 'sections',
        title: 'Sections',
        description: 'Understanding the three main sections: .data, .bss, and .text.',
        content: `; NASM program structure
section .data       ; initialized data
    name db "NASM", 0

section .bss        ; uninitialized data
    buffer resb 64   ; reserve 64 bytes

section .text       ; executable code
    global _start

_start:
    ; your code goes here
    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Sections define the program layout."
      },
      {
        id: 'syscalls',
        title: 'Syscalls',
        description: 'Using Linux system calls to perform I/O and program control.',
        content: `; Common Linux x86 syscalls (32-bit)
; sys_write: eax=4  ebx=fd  ecx=buf  edx=len
; sys_read:  eax=3  ebx=fd  ecx=buf  edx=len
; sys_exit:  eax=1  ebx=exit_code

section .data
    prompt db "Type something: ", 0
    plen equ $ - prompt

section .bss
    input resb 128

section .text
    global _start

_start:
    mov eax, 4           ; sys_write
    mov ebx, 1           ; stdout
    mov ecx, prompt
    mov edx, plen
    int 0x80

    mov eax, 1           ; sys_exit
    xor ebx, ebx
    int 0x80
`,
        output: "Syscalls bridge user code and kernel."
      }
    ],
  },
  {
    id: 'data-memory',
    title: 'Data & Memory',
    subtopics: [
      {
        id: 'data-section',
        title: 'Data Section',
        description: 'Defining initialized data with db, dw, dd, and dq.',
        content: `section .data
    byte_val  db 0x42           ; 1 byte
    word_val  dw 1000           ; 2 bytes (word)
    dword_val dd 0xDEADBEEF     ; 4 bytes (doubleword)
    qword_val dq 0x1234567890   ; 8 bytes (quadword)
    array     db 1, 2, 3, 4, 5 ; byte array
    str       db "Hello", 0     ; null-terminated string
    float_val dd 3.14           ; single-precision float

section .text
global _start
_start:
    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Data initialized in .data section."
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Working with variables using labels and equ directives.',
        content: `section .data
    count dd 0            ; integer variable
    name  db "Alice", 0   ; string variable

section .text
global _start

_start:
    mov dword [count], 100  ; set count = 100
    mov eax, [count]        ; read count into EAX
    inc dword [count]       ; count++
    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "count = 101 after increment."
      },
      {
        id: 'memory-addressing',
        title: 'Memory Addressing',
        description: 'Different addressing modes: direct, indirect, indexed, and base+offset.',
        content: `section .data
    arr dd 10, 20, 30, 40, 50

section .text
global _start

_start:
    mov eax, [arr]           ; direct: eax = arr[0] = 10
    mov ebx, arr             ; lea-like: ebx = address of arr
    mov ecx, [ebx + 4]       ; base+offset: ecx = arr[1] = 20
    mov edx, [ebx + ecx*2]   ; base+index*scale (not valid, demo only)

    ; indexed addressing
    mov esi, 8
    mov eax, [arr + esi]     ; eax = arr[2] = 30

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "EAX = 30 from indexed access."
      },
      {
        id: 'stack-operations',
        title: 'Stack Operations',
        description: 'Using push, pop, and managing the stack frame with ESP/EBP.',
        content: `section .text
global _start

_start:
    push 10          ; push value onto stack
    push 20
    push 30

    pop eax          ; eax = 30 (LIFO)
    pop ebx          ; ebx = 20
    pop ecx          ; ecx = 10

    ; stack frame setup
    push ebp
    mov ebp, esp
    sub esp, 8       ; allocate 8 bytes for locals

    mov dword [ebp-4], 42   ; local variable 1
    mov dword [ebp-8], 99   ; local variable 2

    mov esp, ebp     ; restore stack
    pop ebp

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Stack: eax=30, ebx=20, ecx=10"
      }
    ],
  },
  {
    id: 'arithmetic-logic',
    title: 'Arithmetic & Logic',
    subtopics: [
      {
        id: 'add-sub-mul-div',
        title: 'ADD / SUB / MUL / DIV',
        description: 'Performing basic arithmetic operations in assembly.',
        content: `section .data
    result dd 0

section .text
global _start

_start:
    mov eax, 10
    mov ebx, 3

    add eax, ebx       ; eax = 10 + 3 = 13
    sub eax, 4         ; eax = 13 - 4 = 9

    ; multiplication: MUL multiplies EAX by operand
    mov eax, 7
    mov ecx, 6
    mul ecx            ; EDX:EAX = EAX * ECX = 42
    mov [result], eax

    ; division: DIV divides EDX:EAX by operand
    xor edx, edx       ; clear EDX
    mov eax, 42
    mov ecx, 5
    div ecx            ; EAX = 42/5 = 8, EDX = 42%5 = 2

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "Result = 42, division: quotient=8, remainder=2"
      },
      {
        id: 'logical-ops',
        title: 'Logical Operations',
        description: 'Bitwise AND, OR, XOR, and NOT operations.',
        content: `section .text
global _start

_start:
    mov eax, 0b1100    ; eax = 12 (binary 1100)
    mov ebx, 0b1010    ; ebx = 10 (binary 1010)

    and eax, ebx       ; eax = 1100 & 1010 = 1000 (8)
    mov ecx, eax

    mov eax, 0b1100
    or eax, ebx        ; eax = 1100 | 1010 = 1110 (14)

    mov eax, 0b1100
    xor eax, ebx       ; eax = 1100 ^ 1010 = 0110 (6)

    mov eax, 0b1100
    not eax            ; eax = ~1100 = 0xFFFFFFF3

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "AND=8, OR=14, XOR=6, NOT=0xFFFFFFF3"
      },
      {
        id: 'comparisons',
        title: 'Comparisons',
        description: 'Using CMP and conditional jumps for decision making.',
        content: `section .data
    msg_gt db "A > B", 0xA
    len_gt equ $ - msg_gt
    msg_le db "A <= B", 0xA
    len_le equ $ - msg_le

section .text
global _start

_start:
    mov eax, 15
    mov ebx, 10
    cmp eax, ebx       ; compare eax with ebx

    jg  greater        ; jump if eax > ebx

    ; less-or-equal path
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_le
    mov edx, len_le
    int 0x80
    jmp done

greater:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_gt
    mov edx, len_gt
    int 0x80

done:
    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "A > B"
      },
      {
        id: 'shifts',
        title: 'Shifts',
        description: 'Using SHL, SHR, SAL, SAR for bit shifting operations.',
        content: `section .text
global _start

_start:
    mov eax, 5          ; eax = 0101b

    shl eax, 1          ; left shift: eax = 1010b = 10
    mov ebx, eax

    mov eax, 32         ; eax = 0010 0000b
    shr eax, 2          ; right shift: eax = 0000 1000b = 8
    mov ecx, eax

    ; quick multiply by 2^n using shift
    mov eax, 7
    shl eax, 3          ; eax = 7 * 8 = 56

    ; quick divide by 2^n using shift
    mov eax, 100
    shr eax, 2          ; eax = 100 / 4 = 25

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "ebx=10, ecx=8, fast mul=56, fast div=25"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'jumps',
        title: 'Jumps',
        description: 'Unconditional and conditional jump instructions for flow control.',
        content: `section .text
global _start

_start:
    mov eax, 0
    mov ecx, 3

loop_start:
    inc eax            ; eax++
    cmp ecx, 0
    je  exit_loop      ; jump if ecx == 0
    dec ecx            ; ecx--
    jmp loop_start     ; unconditional jump

exit_loop:
    ; eax = 3 after loop
    mov ebx, eax

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "eax = 3 after loop completion."
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Implementing loops using LOOP, conditional jumps, and manual counters.',
        content: `section .data
    sum dd 0

section .text
global _start

_start:
    mov ecx, 5          ; loop counter
    xor eax, eax        ; accumulator

sum_loop:
    add eax, ecx        ; eax += ecx
    loop sum_loop       ; dec ecx, jnz sum_loop
    mov [sum], eax      ; sum = 5+4+3+2+1 = 15

    ; while-style loop
    mov ecx, 0
while_loop:
    cmp ecx, 5
    jge end_while       ; exit when ecx >= 5
    inc ecx
    jmp while_loop
end_while:

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "sum = 15, ecx = 5 after while loop."
      },
      {
        id: 'procedures',
        title: 'Procedures',
        description: 'Defining and calling procedures (functions) with CALL and RET.',
        content: `section .text
global _start

print_char:
    ; prints character in al (simplified example)
    ret

add_two:
    push ebp
    mov ebp, esp
    mov eax, [ebp+8]      ; first argument
    mov ebx, [ebp+12]     ; second argument
    add eax, ebx
    pop ebp
    ret

_start:
    push 30               ; second argument
    push 20               ; first argument
    call add_two          ; eax = 20 + 30 = 50
    add esp, 8            ; clean up stack

    ; eax now holds 50
    mov ebx, eax

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "add_two(20, 30) = 50"
      },
      {
        id: 'calling-conventions',
        title: 'Calling Conventions',
        description: 'Understanding cdecl and stdcall conventions for function calls.',
        content: `; cdecl convention (caller cleans stack)
; Arguments pushed right-to-left
; Return value in EAX

section .text
global _start

; cdecl-style function: int multiply(int a, int b)
multiply:
    push ebp
    mov ebp, esp
    mov eax, [ebp+8]       ; a
    mov ebx, [ebp+12]      ; b
    imul eax, ebx          ; eax = a * b
    pop ebp
    ret

_start:
    push 7                 ; b
    push 6                 ; a
    call multiply
    add esp, 8             ; caller cleans stack (cdecl)

    ; eax = 42
    mov ebx, eax

    ; preserved registers across calls:
    ; EBX, ESI, EDI, EBP, ESP must be preserved
    ; EAX, ECX, EDX may be clobbered

    mov eax, 1
    xor ebx, ebx
    int 0x80
`,
        output: "multiply(6, 7) = 42"
      }
    ],
  },
]
};
