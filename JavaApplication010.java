/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jcfer
 */
package javaapplication010;

public class JavaApplication010 {

   public static void main(String[] args) {

        int M[] = {15, 4, 18, 90, 1, 23, 85, 36, 19};
        String N[] = {"Rodriguez", "Chavez", "Julca", "Reyes", "Encarnacion", "Aguilar", "Zapata", "Becerra", "Lee"};

        System.out.println("ANTES:");
        for(int i=0;i<M.length;i++){
        System.out.print(M[i]+", ");
        }
        System.out.println("\n\nDESPUES");
        System.out.println("\nSelection:");
        selectionSort(M);
        System.out.println("\n\nInsertion:");
        insertionSort(M);
        
        
        System.out.println("\n\nANTES:");
        for(int i=0;i<N.length;i++){
        System.out.print(N[i]+", ");
        }
        System.out.println("\n\nDESPUES");
        System.out.println("\nSelection:");
        selectionSortS(N);
        System.out.println("\n\nInsertion:");
        insertionSortS(N);
        System.out.println("");
        
        
        
        
        
        
    }

//-------------------------------------------------
    public static void selectionSort(int arr[]) {
        int n = arr.length;

        //uno por uno mueve la frontera del subarreglo desordenado
        for (int i = 0; i < n - 1; i++) {

            //Halle el minimo elemento de un arreglo desordenado
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }

            //Intercepte el elemento minimo con el primer elemento
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
            System.out.print(arr[i] + ",");
        }
    }

    public static void insertionSort(int arr[]) {
        int n = arr.length;

        

        for (int i = 1; i < n; i++) {
            int clave = arr[i];
            int j = i - 1;

            /*
        Mueve los elementos de arr[0...i-1], que son más grandes que la clave, 
        una posición posterior de su actual posición
             */
            while (j >= 0 && arr[j] > clave) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = clave;
            System.out.print(arr[i] + ",");
        }
    }
    
    public static void selectionSortS(String[] arr) {
        int n = arr.length;

        //uno por uno mueve la frontera del subarreglo desordenado
        for (int i = 0; i < arr.length - 1; i++) {

            //Halle el minimo elemento de un arreglo desordenado
            int minIdx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j].compareTo(arr[minIdx])<0 ) {
                    minIdx = j;
                }
            }

            //Intercepte el elemento minimo con el primer elemento
            String temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
            System.out.print(arr[i] + ",");
        }
    }

    public static void insertionSortS(String[] arr) {
        int n = arr.length;

        

        for (int i = 1; i < arr.length; i++) {
            String clave = arr[i];
            int j = i - 1;

            /*
        Mueve los elementos de arr[0...i-1], que son más grandes que la clave, 
        una posición posterior de su actual posición
             */
            while (j >= 0 && arr[j].compareTo(clave)<0) {
                arr[j] = arr[j+ 1];
                j = j - 1;
            }
            arr[j + 1] = clave;
            System.out.print(arr[i] + ",");
        }
    }
    
}
   

