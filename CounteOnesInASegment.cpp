char *lookup;
void Start()
{
	if (lookup != NULL)
		return;
	lookup = new char[256];
	for (int x = 0; x < 256; x++)
	{
		int sum = 0;
		for (int k = 0; k < 8; k++)
		{
			sum += (x >> k) & 0x1;
		}
		lookup[x] = sum;
	}
}

long long countOnes(int left, int right)
{
	Start();
	long sum = 0;
	for (int i = left; i <= right; i++)
	{		
		sum += lookup[i & 0xFF];
		sum += lookup[(i>>8) & 0xFF];
		sum += lookup[(i>>16) & 0xFF];
		sum += lookup[(i>>24) & 0xFF];
		
	}
	return sum;
}