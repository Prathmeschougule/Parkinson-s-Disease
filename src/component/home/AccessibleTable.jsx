import React from 'react'


function AccessibleTable() {
  return (

   
  <div class="overflow-x-auto p-6">
  <table class="min-w-[1200px] mx-auto border border-gray-200 rounded-lg shadow-md">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Time
        </th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Activity
        </th>
      </tr>
    </thead>

   
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 text-sm text-gray-800">Morning</td>
        <td class="px-6 py-4 text-sm text-gray-600">Stretching + Walking </td>
    
      </tr>

      <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 text-sm text-gray-800">Afternoon</td>
        <td class="px-6 py-4 text-sm text-gray-600">Strength + Balance</td>
      </tr>
        <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 text-sm text-gray-800">Evening</td>
        <td class="px-6 py-4 text-sm text-gray-600">Breathing +  Posture</td>
      </tr>
    </tbody>

  </table>
</div>

  )
}

export default AccessibleTable
